"use client"

import { usePathname } from "next/navigation"
import { ChevronRight } from "lucide-react"
import * as React from "react"
import {
    SidebarGroup,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuItem,
    SidebarMenuButton,
    SidebarMenuAction,
    SidebarMenuSub,
    SidebarMenuSubItem,
    SidebarMenuSubButton,
} from "@/components/ui/sidebar"
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible"

export function NavTransactions({ items }: { items: any[] }) {
    const pathname = usePathname()
    const [openKeys, setOpenKeys] = React.useState<string[]>([])

    const handleToggle = (title: string, open: boolean) => {
        setOpenKeys((prev) =>
            open ? [...prev, title] : prev.filter((t) => t !== title)
        )
    }

    return (
        <SidebarGroup>
            <SidebarGroupLabel>Platform</SidebarGroupLabel>
            <SidebarMenu>
                {items.map((item) => {
                    const isParentActive =
                        pathname === item.url ||
                        item.items?.some((sub: any) => pathname.startsWith(sub.url))

                    const isOpen = openKeys.includes(item.title) || isParentActive

                    return (
                        <Collapsible
                            key={item.title}
                            asChild
                            open={isOpen}
                            onOpenChange={(open) => handleToggle(item.title, open)}
                        >
                            <SidebarMenuItem>
                                <SidebarMenuButton asChild tooltip={item.title}>
                                    <a href={item.url} className="flex items-center gap-2">
                                        {item.icon && <item.icon />}
                                        <span>{item.title}</span>
                                    </a>
                                </SidebarMenuButton>

                                {item.items?.length ? (
                                    <>
                                        <CollapsibleTrigger asChild>
                                            <SidebarMenuAction className="data-[state=open]:rotate-90">
                                                <ChevronRight />
                                                <span className="sr-only">Toggle</span>
                                            </SidebarMenuAction>
                                        </CollapsibleTrigger>
                                        <CollapsibleContent>
                                            <SidebarMenuSub>
                                                {item.items?.map((subItem: any) => {
                                                    const isSubActive = pathname.startsWith(subItem.url)
                                                    return (
                                                        <SidebarMenuSubItem key={subItem.title}>
                                                            <SidebarMenuSubButton
                                                                asChild
                                                                className={
                                                                    isSubActive
                                                                        ? "bg-sidebar-border text-sidebar-border-foreground"
                                                                        : ""
                                                                }
                                                            >
                                                                <a
                                                                    href={subItem.url}
                                                                    className="flex items-center gap-2"
                                                                >
                                                                    {subItem.icon && <subItem.icon />}
                                                                    <span>{subItem.title}</span>
                                                                </a>
                                                            </SidebarMenuSubButton>
                                                        </SidebarMenuSubItem>
                                                    )
                                                })}
                                            </SidebarMenuSub>
                                        </CollapsibleContent>
                                    </>
                                ) : null}
                            </SidebarMenuItem>
                        </Collapsible>
                    )
                })}
            </SidebarMenu>
        </SidebarGroup>
    )
}
