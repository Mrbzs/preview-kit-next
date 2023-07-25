"use client";

import { useLiveQuery } from "@sanity/preview-kit";

const usersQuery = `*[_type == "user"]`;

export interface UsersListProps {
  data: any[];
}

export default function UsersPreview(props: UsersListProps) {
  const { data: initialData } = props;
  const [data] = useLiveQuery(initialData, usersQuery);

  return data?.map((user, index) => (
    <div key={index}>
      <h2>{user.name}</h2>
    </div>
  ));
}
