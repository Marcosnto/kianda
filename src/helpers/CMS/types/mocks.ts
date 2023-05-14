export type OptionsProps = {
  key: string;
  icon: JSX.Element;
  displayName: string;
  render?: JSX.Element;
};

export type userOptions = {
  type: string;
  users: Array<OptionsProps>;
  blog: Array<OptionsProps>;
};
