'use client';

import escapeHTML from 'escape-html';
import {
  CSSProperties,
  ComponentPropsWithoutRef,
  ReactNode,
  memo,
  useCallback
} from 'react';

import Blockquote, { BlockquoteProps } from '@/components/atoms/Blockquote';
import Icon, { IconProps } from '@/components/atoms/Icon';
import Image, { ImageProps } from '@/components/atoms/Image';
import Link, { LinkProps } from '@/components/atoms/Link';
import Text, { TextProps } from '@/components/atoms/Text';
import Title, { TitleOrder, TitleProps } from '@/components/atoms/Title';
import List, {
  ListItemProps,
  ListRootProps,
  ListRootType
} from '@/components/molecules/List';

import cn from './cn';
import exhaustiveMatchingGuard from './exhaustiveMatchingGuard';
import { Node } from './serialize';

type ElementNode =
  | { type: 'heading'; order: TitleOrder; children: Node[] }
  | { type: 'paragraph'; children: Node[] }
  | { type: 'small'; children: Node[] }
  | { type: 'alignText'; align: CSSProperties['textAlign']; children: Node[] }
  | { type: 'quote'; cite?: string; children: Node[] }
  | { type: 'list'; listType: ListRootType; children: Node[] }
  | { type: 'li'; children: Node[] }
  | { type: 'link'; url: string; children: Node[] }
  | { type: 'image'; src: string; alt: string }
  | { type: 'icon'; src: string };

type ElementProps = {
  heading?: Partial<TitleProps>;
  paragraph?: Partial<TextProps>;
  small?: Partial<TextProps>;
  alignText?: Partial<ComponentPropsWithoutRef<'span'>>;
  quote?: Partial<BlockquoteProps>;
  list?: Partial<ListRootProps>;
  li?: Partial<ListItemProps>;
  link?: Partial<LinkProps>;
  image?: Partial<ImageProps>;
  icon?: Partial<
    IconProps & {
      wrapperProps?: ComponentPropsWithoutRef<'div'>;
    }
  >;
};

type SerializedElementProps = {
  node: ElementNode;
  children?: ReactNode;
  props?: ElementProps;
};

const SerializedElement = ({
  node,
  children,
  props
}: SerializedElementProps) => {
  const renderElement = useCallback(() => {
    switch (node.type) {
      case 'heading':
        return (
          <Title
            order={node.order}
            {...props?.heading}
          >
            {children}
          </Title>
        );
      case 'paragraph':
        return <Text {...props?.paragraph}>{children}</Text>;
      case 'small':
        return (
          <Text
            component='small'
            {...props?.small}
            className={cn(
              'text-xs text-dimmed *:text-text',
              props?.small?.className
            )}
          >
            {children}
          </Text>
        );
      case 'alignText':
        return (
          <span
            data-align={node.align}
            style={{ textAlign: node.align }}
            {...props?.alignText}
            className={cn('block', props?.alignText?.className)}
          >
            {children}
          </span>
        );
      case 'quote':
        return (
          <Blockquote
            cite={node.cite}
            {...props?.quote}
          >
            {children}
          </Blockquote>
        );
      case 'list':
        return (
          <List.Root
            type={node.listType}
            {...props?.list}
            className={cn('p-2 pr-0', props?.list?.className)}
          >
            {children}
          </List.Root>
        );
      case 'li':
        return <List.Item {...props?.li}>{children}</List.Item>;
      case 'link':
        return (
          <Link
            href={escapeHTML(node.url)}
            {...props?.link}
            className={cn('text-[1em] font-semibold', props?.link?.className)}
          >
            {children}
          </Link>
        );
      case 'image':
        return (
          <Image
            alt={node.alt}
            src={escapeHTML(node.src)}
            {...props?.image}
          />
        );
      case 'icon': {
        const { wrapperProps, ...iconProps } = props?.icon ?? {};

        return (
          <span
            {...wrapperProps}
            className={cn('inline-block size-[1em]', wrapperProps?.className)}
          >
            <Icon
              src={escapeHTML(node.src)}
              {...iconProps}
            />
          </span>
        );
      }
      default:
        return exhaustiveMatchingGuard(node);
    }
  }, [node, children, props]);

  return renderElement();
};

export default memo(SerializedElement);
export type { SerializedElementProps, ElementNode, ElementProps };
