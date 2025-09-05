"use client"

import * as React from "react"
import {
  IconBolt,
  IconBuildingAirport,
  IconChartBar,
  IconDashboard,
  IconDeviceMobile,
  IconDeviceMobileMessage,
  IconDroplet,
  IconFileInvoice,
  IconFolder,
  IconHelp,
  IconHome,
  IconPhoneCall,
  IconReceipt2,
  IconRouter,
  IconSearch,
  IconSettings,
  IconTicket,
  IconWallet,
} from "@tabler/icons-react"

import { NavMain } from "@/components/nav-main"
import { NavSecondary } from "@/components/nav-secondary"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { NavTransactions } from "./nav-transactions"
import { Command } from "lucide-react"

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "#",
      icon: IconDashboard,
    },
    {
      title: "Analytics",
      url: "/lifecycle",
      icon: IconChartBar,
    },
    {
      title: "Transaction",
      url: "#",
      icon: IconFolder,
    }
  ],
  navSecondary: [
    {
      title: "Settings",
      url: "#",
      icon: IconSettings,
    },
    {
      title: "Get Help",
      url: "#",
      icon: IconHelp,
    },
    {
      title: "Search",
      url: "#",
      icon: IconSearch,
    },
  ],
  transactions: [
    {
      title: "Isi Pulsa",
      url: "#",
      icon: IconDeviceMobile, 
      isActive: true,
      items: [
        { 
          title: "Paket Data", 
          url: "/mobile/data-package",
          icon: IconDeviceMobileMessage
        },
        { 
          title: "Paket Telepon", 
          url: "/mobile/data-telephone",
          icon: IconPhoneCall
        },
        { 
          title: "Top Up E-Wallet", 
          url: "/mobile/e-wallet",
          icon: IconWallet
        },
        { 
          title: "Voucher", 
          url: "/mobile/voucher",
          icon: IconRouter
        },
        { 
          title: "Token", 
          url: "/mobile/token",
          icon: IconBolt
        },
      ],
    },
    {
      title: "Bayar Tagihan",
      url: "#",
      icon: IconFileInvoice,
      items: [
        { 
          title: "PDAM", 
          url: "#",
          icon: IconDroplet

        },
        { 
          title: "Bayar Pajak", 
          url: "#",
          icon: IconReceipt2
        },
        { 
          title: "Bayar Paspor", 
          url: "#",
          icon: IconBuildingAirport
        },
        { 
          title: "Bayar PBB", 
          url: "#",
          icon: IconHome
        },
        { 
          title: "Beli Tiket", 
          url: "#",
          icon: IconTicket
        },
      ],
    }
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                  <Command className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium">Acme Inc</span>
                  <span className="truncate text-xs">Enterprise</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavTransactions items={data.transactions} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}
