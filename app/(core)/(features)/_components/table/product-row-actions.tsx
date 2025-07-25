import { EyeIcon, EditIcon, Trash2Icon, XIcon } from "lucide-react";
import Link from "next/link";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

export function ProductRowActions({ id, MenuItem }: { id: string | number, MenuItem: React.ElementType }) {
  return (
    <>
      <MenuItem className="gap-2" asChild>
        <Link href={`/products/${id}`}>
          <EyeIcon className="h-4 w-4" />
          Ver Produto
        </Link>
      </MenuItem>
      <MenuItem className="gap-2" asChild>
        <Link href={`/products/edit/${id}`}>
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