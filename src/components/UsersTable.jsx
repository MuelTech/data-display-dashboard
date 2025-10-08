import { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  TableSortLabel,
  Paper,
  Chip,
  Box,
} from '@mui/material';

/**
 * UsersTable Component
 * Displays members data in a table with sorting and pagination features
 * Shows member roles, group, and status with Material-UI Table components (no internal title)
 */
function UsersTable() {
  // members data for employee directory
  const employees = [
    { id: 1, name: 'Im Nayeon', role: 'Lead Vocalist', group: 'TWICE', status: 'Active' },
    { id: 2, name: 'Yoo Jeongyeon', role: 'Lead Vocalist', group: 'TWICE', status: 'Active' },
    { id: 3, name: 'Hirai Momo', role: 'Main Dancer', group: 'TWICE', status: 'Active' },
    { id: 4, name: 'Minatozaki Sana', role: 'Vocalist', group: 'TWICE', status: 'Active' },
    { id: 5, name: 'Park Jihyo', role: 'Leader & Main Vocalist', group: 'TWICE', status: 'Active' },
    { id: 6, name: 'Myoui Mina', role: 'Main Dancer', group: 'TWICE', status: 'Active' },
    { id: 7, name: 'Kim Dahyun', role: 'Lead Rapper', group: 'TWICE', status: 'Active' },
    { id: 8, name: 'Son Chaeyoung', role: 'Main Rapper', group: 'TWICE', status: 'Active' },
    { id: 9, name: 'Chou Tzuyu', role: 'Lead Dancer', group: 'TWICE', status: 'Active' },
  ];

  // State for pagination
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  // State for sorting
  const [orderBy, setOrderBy] = useState('name');
  const [order, setOrder] = useState('asc');

  /**
   * Handle sorting when column header is clicked
   */
  const handleRequestSort = (property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  /**
   * Handle page change in pagination
   */
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  /**
   * Handle rows per page change
   */
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  /**
   * Sort the data based on current sort settings
   */
  const sortedData = [...employees].sort((a, b) => {
    if (order === 'asc') {
      return a[orderBy] < b[orderBy] ? -1 : 1;
    }
    return a[orderBy] > b[orderBy] ? -1 : 1;
  });

  // Get current page data
  const paginatedData = sortedData.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  return (
    <Paper
      elevation={2}
      sx={{
        width: '100%',
        overflow: 'hidden',
        borderRadius: { xs: 2, sm: 3 }
      }}
    >
      {/* Table container with horizontal scroll if needed */}
      <TableContainer sx={{ maxHeight: { xs: 400, sm: 500, lg: 600 } }}>
        <Table sx={{ minWidth: { xs: 600, sm: 650, lg: 700 } }}>
          {/* Table header with sortable columns */}
          <TableHead>
            <TableRow sx={{ backgroundColor: 'primary.light' }}>
              <TableCell
                sx={{
                  fontSize: { xs: '0.875rem', sm: '1rem' },
                  width: { xs: '35%', sm: '30%', md: '25%' },
                  minWidth: { xs: 140, sm: 160, md: 180 }
                }}
              >
                <TableSortLabel
                  active={orderBy === 'name'}
                  direction={orderBy === 'name' ? order : 'asc'}
                  onClick={() => handleRequestSort('name')}
                >
                  <strong>Name</strong>
                </TableSortLabel>
              </TableCell>
              <TableCell
                sx={{
                  fontSize: { xs: '0.875rem', sm: '1rem' },
                  width: { xs: '35%', sm: '35%', md: '35%' },
                  minWidth: { xs: 140, sm: 160, md: 180 }
                }}
              >
                <TableSortLabel
                  active={orderBy === 'role'}
                  direction={orderBy === 'role' ? order : 'asc'}
                  onClick={() => handleRequestSort('role')}
                >
                  <strong>Role</strong>
                </TableSortLabel>
              </TableCell>
              <TableCell
                sx={{
                  fontSize: { xs: '0.875rem', sm: '1rem' },
                  width: { xs: '15%', sm: '15%', md: '20%' },
                  minWidth: { xs: 80, sm: 90, md: 100 }
                }}
              >
                <TableSortLabel
                  active={orderBy === 'group'}
                  direction={orderBy === 'group' ? order : 'asc'}
                  onClick={() => handleRequestSort('group')}
                >
                  <strong>Group</strong>
                </TableSortLabel>
              </TableCell>
              <TableCell
                sx={{
                  fontSize: { xs: '0.875rem', sm: '1rem' },
                  width: { xs: '15%', sm: '20%', md: '20%' },
                  minWidth: { xs: 80, sm: 90, md: 100 }
                }}
              >
                <strong>Status</strong>
              </TableCell>
            </TableRow>
          </TableHead>

          {/* Table body with employee data */}
          <TableBody>
            {paginatedData.map((employee) => (
              <TableRow
                key={employee.id}
                hover
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell
                  component="th"
                  scope="row"
                  sx={{
                    fontSize: { xs: '0.875rem', sm: '1rem' },
                    width: { xs: '35%', sm: '30%', md: '25%' },
                    minWidth: { xs: 140, sm: 160, md: 180 }
                  }}
                >
                  {employee.name}
                </TableCell>
                <TableCell
                  sx={{
                    fontSize: { xs: '0.875rem', sm: '1rem' },
                    width: { xs: '35%', sm: '35%', md: '35%' },
                    minWidth: { xs: 140, sm: 160, md: 180 }
                  }}
                >
                  {employee.role}
                </TableCell>
                <TableCell
                  sx={{
                    fontSize: { xs: '0.875rem', sm: '1rem' },
                    width: { xs: '15%', sm: '15%', md: '20%' },
                    minWidth: { xs: 80, sm: 90, md: 100 }
                  }}
                >
                  {employee.group}
                </TableCell>
                <TableCell
                  sx={{
                    fontSize: { xs: '0.875rem', sm: '1rem' },
                    width: { xs: '15%', sm: '20%', md: '20%' },
                    minWidth: { xs: 80, sm: 90, md: 100 }
                  }}
                >
                  {/* Status indicator with color-coded chip */}
                  <Chip
                    label={employee.status}
                    color={employee.status === 'Active' ? 'success' : 'warning'}
                    size="small"
                    sx={{
                      fontSize: { xs: '0.7rem', sm: '0.875rem' },
                      height: { xs: 24, sm: 32 }
                    }}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Pagination controls at the bottom */}
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={employees.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}

export default UsersTable;

