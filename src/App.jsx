import { ColorModeContext, useMode } from './theme'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { Routes, Route } from 'react-router-dom'
import Topbar from './scenes/global/Topbar'
import Sidebar from './scenes/global/Sidebar'
import Dashboard from './scenes/dashboard'
import Team from './scenes/team'
import Contacts from './scenes/contacts'
import Invoices from './scenes/invoices'
import Form from './scenes/form'
import Bar from './scenes/bar'
import Line from './scenes/line'
import Pie from './scenes/pie'
import FAQ from './scenes/faq'
import Geography from './scenes/geography'
import Calendar from './scenes/calendar'

export default function App() {
  const [theme, colorMode] = useMode()

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar />
          <main className="content">
            <Topbar />
            <Routes>
              <Route path="/admin-panel" element={<Dashboard />} />
              <Route path="/admin-panel/team" element={<Team />} />
              <Route path="/admin-panel/contacts" element={<Contacts />} />
              <Route path="/admin-panel/invoices" element={<Invoices />} />
              <Route path="/admin-panel/form" element={<Form />} />
              <Route path="/admin-panel/calendar" element={<Calendar />} />
              <Route path="/admin-panel/faq" element={<FAQ />} />
              <Route path="/admin-panel/bar" element={<Bar />} />
              <Route path="/admin-panel/pie" element={<Pie />} />
              <Route path="/admin-panel/line" element={<Line />} />
              <Route path="/admin-panel/geography" element={<Geography />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}
