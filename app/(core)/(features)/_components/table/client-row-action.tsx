import Link from "next/link";
import { EyeIcon, EditIcon, Trash2Icon, XIcon } from "lucide-react";

export function ClientRowAction({ id, MenuItem }: { id: string | number, MenuItem: React.ElementType }) {
  return (
    <>
      <MenuItem className="gap-2" asChild>
        <Link href={`/clients/${id}`}>
          <EyeIcon className="h-4 w-4" />
          Ver Cliente
        </Link>
      </MenuItem>
      <MenuItem className="gap-2" asChild>
        <Link href={`/clients/edit/${id}`}>
          <EditIcon className="h-4 w-4 text-muted-foreground" />
          Editar
        </Link>
      </MenuItem>
      <MenuItem className="gap-2 text-red-600">
        <Trash2Icon className="h-4 w-4 text-red-600" />
        Eliminar
      </MenuItem>
      <MenuItem className="gap-2">
        <XIcon className="h-4 w-4" />
        Cancelar
      </MenuItem>
    </>
  );
}