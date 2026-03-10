import { Button } from "@/components/ui";
import { AddRegular } from "@fluentui/react-icons";
import { Stack } from "@mui/material";
import { useState } from "react";
import AddAdminModal from "./AddAdminModal";
import { useGetAdmins } from "@/queries/user";

export default function PlatformAdminsPage() {
  const [openAdd, setOpenAdd] = useState(false);
  const { data, loading } = useGetAdmins();

  console.log("Admins");
  console.log(data);

  function handleAdd() {
    setOpenAdd(true);
  }

  return (
    <>
      <Stack direction="row">
        <Button disabled={loading} startContent={<AddRegular />} onClick={handleAdd}>
          Add
        </Button>
      </Stack>

      {openAdd && <AddAdminModal open onClose={() => setOpenAdd(false)} />}
    </>
  );
}
