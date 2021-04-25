import { ReactNode } from "react";
import { Box, Button, Collapsible, Layer } from "grommet";
import { FormClose } from "grommet-icons";

type AppSidebarProps = {
  children?: ReactNode;
  onClose?: () => void;
  showSidebar?: boolean;
  size?: string;
};

export default function AppSidebar({
  children,
  onClose,
  showSidebar,
  size,
  ...props
}: AppSidebarProps) {
  if (!showSidebar || size !== "small") {
    return (
      <Collapsible direction="horizontal" open={showSidebar}>
        <Box
          flex
          width="medium"
          background="light-2"
          elevation="small"
          align="center"
          justify="center"
        >
          {children}
        </Box>
      </Collapsible>
    );
  }

  return (
    <Layer>
      <Box
        background="light-2"
        tag="header"
        justify="end"
        align="center"
        direction="row"
      >
        <Button
          a11yTitle="close sidebar"
          icon={<FormClose />}
          onClick={onClose}
        />
      </Box>
      <Box fill background="light-2" align="center" justify="center">
        {children}
      </Box>
    </Layer>
  );
}
