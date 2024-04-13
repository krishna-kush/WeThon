import * as React from 'react';
import { CssVarsProvider } from '@mui/joy/styles';
import { FocusTrap } from '@mui/base/FocusTrap';
import CssBaseline from '@mui/joy/CssBaseline';
import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';
import Button from '@mui/joy/Button';
import Stack from '@mui/joy/Stack';

import EmailRoundedIcon from '@mui/icons-material/EmailRounded';

import Layout from './Layout';
import Navigation from './Navigation';
import Header from './Header';

export default function EmailExample() {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  const options = [
    {
      name: 'Dashboard',
      href: '/allthons',
      selected: true,
      icon: <EmailRoundedIcon />,
    },
    {
      name: 'page 2',
      href: '/page1',
      icon: <EmailRoundedIcon />
    },
    // {
    //   name: 'page 3',
    //   href: '/page1',
    //   icon: <EmailRoundedIcon />
    // },
  ]

  return (
    <CssVarsProvider disableTransitionOnChange>
      <CssBaseline />
      {drawerOpen && (
        <Layout.SideDrawer onClose={() => setDrawerOpen(false)}>
          <Navigation />
        </Layout.SideDrawer>
      )}
      <Stack
        id="tab-bar"
        direction="row"
        justifyContent="space-around"
        spacing={1}
        sx={{
          display: { xs: 'flex', sm: 'none' },
          zIndex: '999',
          bottom: 0,
          position: 'fixed',
          width: '100dvw',
          py: 2,
          backgroundColor: 'background.body',
          borderTop: '1px solid',
          borderColor: 'divider',
        }}
      >
        {
          options.map((option, i)=> {
            return (
              <Button
                variant="plain"
                color="neutral"
                aria-pressed={option?.selected? "true" : "false"}
                component="a"
                href={`${option.href}`}
                size="sm"
                startDecorator={option.icon}
                sx={{ flexDirection: 'column', '--Button-gap': 0 }}
              >
                {option.name}
              </Button> 
            )
          })
        }
      </Stack>
      <Layout.Root
        sx={{
          ...(drawerOpen && {
            // height: '100vh',
            overflow: 'hidden',
          }),
        }}
      >
        <Layout.Header>
          <Header options={options} />
        </Layout.Header>
      </Layout.Root>
    </CssVarsProvider>
  );
}