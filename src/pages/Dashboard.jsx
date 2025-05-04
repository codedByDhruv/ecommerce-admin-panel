import { Box, Grid, Paper, Typography } from "@mui/material";
import { useEffect } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
} from "recharts";
import PeopleIcon from "@mui/icons-material/People";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import ReceiptIcon from "@mui/icons-material/Receipt";

// Updated data for full year
const barData = [
  { name: "Jan", uv: 400 },
  { name: "Feb", uv: 300 },
  { name: "Mar", uv: 500 },
  { name: "Apr", uv: 450 },
  { name: "May", uv: 600 },
  { name: "Jun", uv: 700 },
  { name: "Jul", uv: 650 },
  { name: "Aug", uv: 720 },
  { name: "Sep", uv: 610 },
  { name: "Oct", uv: 530 },
  { name: "Nov", uv: 580 },
  { name: "Dec", uv: 690 },
];

const lineData = [
  { name: "Jan", pv: 240 },
  { name: "Feb", pv: 350 },
  { name: "Mar", pv: 200 },
  { name: "Apr", pv: 300 },
  { name: "May", pv: 400 },
  { name: "Jun", pv: 500 },
  { name: "Jul", pv: 450 },
  { name: "Aug", pv: 520 },
  { name: "Sep", pv: 410 },
  { name: "Oct", pv: 390 },
  { name: "Nov", pv: 460 },
  { name: "Dec", pv: 480 },
];

const stats = [
  { label: "Users", value: 123, icon: PeopleIcon },
  { label: "Sales", value: 456, icon: ShoppingCartIcon },
  { label: "Revenue", value: "$789", icon: AttachMoneyIcon },
  { label: "Orders", value: 321, icon: ReceiptIcon },
];

const Dashboard = () => {
  useEffect(() => {
    document.title = "Admin Panel - Dashboard";
  }, []);

  return (
    <Box p={2}>
      <Typography variant="h4" mb={3}>
        Dashboard
      </Typography>

      {/* Stats Row */}
      <Grid
        container
        spacing={2}
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)", // 4 equal columns
          mb: 2,
        }}
      >
        {stats.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <Grid item key={idx}>
              <Paper
                sx={{
                  p: 2,
                  textAlign: "center",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                  borderRadius: 3,
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  transition: "0.3s",
                  background: (theme) =>
                    `linear-gradient(135deg, ${theme.palette.primary.light} 0%, ${theme.palette.primary.main} 100%)`,
                  color: (theme) => theme.palette.primary.contrastText,
                  "&:hover": {
                    boxShadow: 6,
                    transform: "scale(1.05)",
                  },
                }}
              >
                <Icon sx={{ fontSize: 40, mb: 1 }} />
                <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                  {stat.value}
                </Typography>
                <Typography variant="subtitle1" sx={{ opacity: 0.8 }}>
                  {stat.label}
                </Typography>
              </Paper>
            </Grid>
          );
        })}
      </Grid>

      {/* Charts Row */}
      <Grid
        container
        spacing={2}
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)", // 2 equal columns
        }}
      >
        {/* Bar Chart */}
        <Grid item>
          <Paper
            sx={{
              p: 2,
              minHeight: 350,
              borderRadius: 2,
              boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
              height: "100%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography variant="h6" mb={2}>
              Monthly Sales (Bar Chart)
            </Typography>
            <Box flex={1}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={barData}>
                  <defs>
                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                      <stop
                        offset="5%"
                        stopColor="#1976d2"
                        stopOpacity={0.8}
                      />
                      <stop
                        offset="95%"
                        stopColor="#42a5f5"
                        stopOpacity={0.8}
                      />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar
                    dataKey="uv"
                    fill="url(#colorUv)"
                    radius={[10, 10, 0, 0]}
                    animationDuration={1500}
                  />
                </BarChart>
              </ResponsiveContainer>
            </Box>
          </Paper>
        </Grid>

        {/* Line Chart */}
        <Grid item>
          <Paper
            sx={{
              p: 2,
              minHeight: 350,
              borderRadius: 2,
              boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
              height: "100%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography variant="h6" mb={2}>
              Monthly Revenue (Line Chart)
            </Typography>
            <Box flex={1}>
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={lineData}>
                  <defs>
                    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                      <stop
                        offset="5%"
                        stopColor="#f50057"
                        stopOpacity={0.8}
                      />
                      <stop
                        offset="95%"
                        stopColor="#ff80ab"
                        stopOpacity={0.2}
                      />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="pv"
                    stroke="#f50057"
                    strokeWidth={3}
                    dot={{
                      r: 6,
                      strokeWidth: 2,
                      fill: "#fff",
                      stroke: "#f50057",
                    }}
                    activeDot={{ r: 8 }}
                    fill="url(#colorPv)"
                    animationDuration={1500}
                  />
                </LineChart>
              </ResponsiveContainer>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
