import React from 'react';
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from '@nextui-org/react';

interface AppProps {
  children: React.ReactNode;
}

export default function App({ children }: AppProps) {
  const [selectedKeys, setSelectedKeys] = React.useState(new Set(['text']));
  const [isOpen, setIsOpen] = React.useState(false);

  const handleMouseEnter = () => setIsOpen(true);
  const handleMouseLeave = () => setIsOpen(false);

  return (
    <div onMouseLeave={handleMouseLeave}>
      {/* <Dropdown isOpen={isOpen} closeOnSelect placement="bottom-end">
        <DropdownTrigger>{React.cloneElement(children, { onMouseEnter: handleMouseEnter })}</DropdownTrigger>
        <DropdownMenu
          selectionMode="single"
          selectedKeys={selectedKeys}
          onSelectionChange={setSelectedKeys}
        >
          <DropdownItem key="text">Text</DropdownItem>
          <DropdownItem key="number">Number</DropdownItem>
        </DropdownMenu>
      </Dropdown> */}
    </div>
  );
}