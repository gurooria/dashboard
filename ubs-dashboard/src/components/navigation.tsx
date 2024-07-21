import { Avatar, AvatarFallback } from "@/components/ui/avatar";

import {
  Navbar,
  NavbarDivider,
  NavbarItem,
  NavbarLabel,
  NavbarSection,
  NavbarSpacer,
} from "@/components/navbar";
import {
  Sidebar,
  SidebarBody,
  SidebarHeader,
  SidebarItem,
  SidebarLabel,
  SidebarSection,
} from "@/components/sidebar";
import { StackedLayout } from "@/components/stacked-layout";

import { InboxIcon, MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { Icons } from "@/lib/icons";
import { ModeToggle } from "@/components/darkmode-toggle";

const navItems = [{ label: "Home", url: "/" }];

export function Nav({ children }: { children: React.ReactNode }) {
  return (
    <StackedLayout
      navbar={
        <Navbar>
          <Icons.ubsLogo className="h-6 w-auto" />
          <NavbarDivider className="max-lg:hidden" />
          <NavbarSection className="max-lg:hidden">
            {navItems.map(({ label, url }) => (
              <NavbarItem key={label} href={url}>
                {label}
              </NavbarItem>
            ))}
          </NavbarSection>
          <NavbarSpacer />
          <NavbarSection>
            <NavbarItem href="/" aria-label="Search">
              <MagnifyingGlassIcon />
            </NavbarItem>
            <NavbarItem href="/" aria-label="Inbox">
              <InboxIcon />
            </NavbarItem>
            <ModeToggle />
            <Avatar>
              <AvatarFallback className="text-sm">GS</AvatarFallback>
            </Avatar>
          </NavbarSection>
        </Navbar>
      }
      sidebar={
        <Sidebar>
          <SidebarHeader>
            <Icons.ubsLogo className="h-6 w-auto" />
          </SidebarHeader>
          <SidebarBody>
            <SidebarSection>
              {navItems.map(({ label, url }) => (
                <SidebarItem key={label} href={url}>
                  {label}
                </SidebarItem>
              ))}
            </SidebarSection>
          </SidebarBody>
        </Sidebar>
      }
    >
      {children}
    </StackedLayout>
  );
}
