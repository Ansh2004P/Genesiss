'use client';

import { ReactNode } from "react";
import { CustomCursor } from "../stickyCursor";

export function CursorWrapper({ children }: { children: ReactNode }) {
    return (
        <div className="relative w-full h-full overflow-hidden bg-StartupBackground">
            <CustomCursor />
            {children}
        </div>
    );
}
