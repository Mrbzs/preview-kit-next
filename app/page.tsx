import UsersPreview from "./UsersPreview";
import PreviewProvider from "./PreviewProvider";
import { getClient } from "./lib/sanity";

const usersQuery = `*[_type == "user"]`;

export default async function Page() {
  const token = process.env.NEXT_PUBLIC_SANITY_API_READ_TOKEN;
  const preview = { token };
  const users = await getClient({ preview }).fetch(usersQuery);

  if (preview && preview.token) {
    return (
      <PreviewProvider token={preview.token}>
        <UsersPreview data={users} />
      </PreviewProvider>
    );
  }

  return null;
}
