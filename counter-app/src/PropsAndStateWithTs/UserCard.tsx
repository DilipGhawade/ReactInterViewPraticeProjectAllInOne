export type User = {
  name: string;
  age: number;
  mobileNo?: number;
};

export interface UserProps {
  user: User;
}

export const UserCard = ({ user }: UserProps) => {
  return (
    <>
      <h1>The Props with TS Example</h1>
      <h2>{user.name}</h2>
      <h2>{user.age}</h2>
      <h2>{user.mobileNo}</h2>
    </>
  );
};
