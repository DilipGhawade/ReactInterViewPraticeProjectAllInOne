type User = {
  name: string;
  age: number;
  email: string;
  gender: string;
  mobile?: number;
};
type UserProps = {
  user: User;
};
const UserCard = ({ name, age, email, gender, mobile }: User) => {
  return (
    <>
      <h1>{name}</h1>
    </>
  );
};
