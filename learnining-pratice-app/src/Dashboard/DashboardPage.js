import { useFetch } from "../hooks/useFetch";
import CustomLabel from "../CustomUi/CustomLabel";
const DashboardPage = () => {
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  if (loading) return <CustomLabel label="Loading..." />;
  if (error) return <CustomLabel label={`${error}`} />;

  return (
    <>
      <CustomLabel label="User Data" />

      <table class="table-auto">
        <thead>
          <tr>
            <th>Id</th>
            <th>name</th>
            <th>email</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((user) => (
              <tr>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
};

export default DashboardPage;
