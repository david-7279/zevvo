import React from "react";
import Link from "next/link";

import { Path } from "@/lib/paths";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Navbar = () => {
  return (
    <header className="sticky top-5 w-full z-50 mb-10 px-4">
      <Card className="max-w-2xl mx-auto rounded-2xl shadow-xs">
        <CardContent className="flex flex-row items-center justify-between">
          <Link href={Path.root}>
            <h2 className="scroll-m-20 text-lg font-semibold tracking-tight">
              Business Hub
            </h2>
          </Link>

          <div className="space-x-3">
            <Link href={Path.login}>
              <Button variant="outline">
                Iniciar Sessão
              </Button>
            </Link>
            <Link href={Path.register}>
              <Button>
                Registar
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </header>
  );
};
export default Navbar;