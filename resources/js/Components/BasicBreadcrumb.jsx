import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function BasicBreadcrumbs({bookTitle}) {
  return (
    <div className="border-b py-5">
      <div role="presentation" onClick={handleClick} className="max-w-screen-2xl mx-auto px-10">
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/">
            Home
          </Link>
          {/* <Link
            underline="hover"
            color="inherit"
            href="/material-ui/getting-started/installation/"
          >
            Core
          </Link> */}
          <Typography color="text.primary">{bookTitle}</Typography>
        </Breadcrumbs>
      </div>
    </div>
  );
}