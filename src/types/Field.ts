type Field<E extends string[] | undefined = undefined> = {
  label: string;
  placeholder?: string;
  defaultValue?: any;
} & (E extends string[] ? { errors: Record<E[number], string> } : {});

export default Field;
