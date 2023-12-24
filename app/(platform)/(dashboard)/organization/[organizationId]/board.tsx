import { deleteBoard } from "@/actions/delete-board";
import { Button } from "@/components/ui/button";
import { FormDelete } from "./form-delete";

interface BoardProps {
  title: string;
  id: string;
}

export const Boards = ({
  title,
  id
}: BoardProps) => {
  const deleteBoardWithid = deleteBoard.bind(null, id);

  return (
    <form action={deleteBoardWithid} className="flex items-center gap-x-2">
      <p>
        Board name: {title}
      </p>
      <FormDelete />
    </form>
  )
}