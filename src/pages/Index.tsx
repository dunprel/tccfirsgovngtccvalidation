const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Header */}
      <header className="bg-card px-4 py-3">
        <div className="flex items-center gap-3">
          <img
            src="https://tcc.firs.gov.ng/images/firslogo1.png"
            alt="NRS Logo"
            className="h-12"
          />
        </div>
        <p className="text-primary text-sm mt-1">Together we rise, Together we prosper</p>
        <hr className="mt-3 border-border" />
      </header>

      {/* Nav */}
      <nav className="flex items-center justify-between" style={{ backgroundColor: 'hsl(0 0% 24%)' }}>
        <div className="flex">
          <a href="#" className="px-4 py-2 text-sm text-primary-foreground" style={{ backgroundColor: 'hsl(0 72% 51%)' }}>
            Home
          </a>
          <a href="#" className="px-4 py-2 text-sm text-primary-foreground hover:opacity-80">
            Admin Page
          </a>
        </div>
        <span className="text-primary-foreground text-sm pr-4">— Guest</span>
      </nav>

      {/* EServices Portal subtitle */}
      <div className="px-4 py-2">
        <h6 className="text-primary font-semibold text-sm">EServices Portal</h6>
        <p className="text-primary text-xs">— For your TCC and Receipts</p>
      </div>

      {/* Main Content */}
      <main className="flex-1 px-4 pb-8">
        <div className="max-w-4xl mx-auto bg-card border border-border rounded">
          {/* TCC Validation header */}
          <div className="p-4 border-b border-border">
            <p className="font-normal text-foreground">TCC Validation</p>
            <ul className="list-disc ml-5 mt-1">
              <li>
                <a href="#" className="text-sm" style={{ color: 'hsl(211 100% 43%)' }}>Return back</a>
              </li>
            </ul>
          </div>

          {/* Table */}
          <div className="p-4">
            <table className="w-full border-collapse border border-border text-sm">
              <tbody>
                {/* Logo row */}
                <tr>
                  <td colSpan={4} className="border border-border p-6 text-center" style={{ backgroundColor: 'hsl(0 0% 93%)' }}>
                    <img
                      src="https://tcc.firs.gov.ng/images/firslogo1.png"
                      alt="NRS Logo"
                      className="h-10 mx-auto"
                    />
                  </td>
                </tr>
                {/* Spacer */}
                <tr>
                  <td colSpan={4} className="border border-border p-1"></td>
                </tr>
                {/* Company info */}
                <tr>
                  <td className="border border-border p-2 font-bold w-1/3">Name of Company</td>
                  <td colSpan={3} className="border border-border p-2">INTEGRATED AIMS COMPANY LIMITED</td>
                </tr>
                <tr>
                  <td className="border border-border p-2 font-bold">Office Issued</td>
                  <td colSpan={3} className="border border-border p-2">MSTO AJAH</td>
                </tr>
                <tr>
                  <td className="border border-border p-2 font-bold">Date Issued</td>
                  <td colSpan={3} className="border border-border p-2">2025-04-10 16:50:11</td>
                </tr>
                <tr>
                  <td className="border border-border p-2 font-bold">Expiry Date</td>
                  <td colSpan={3} className="border border-border p-2">2025-12-31</td>
                </tr>
                {/* Assessment headers */}
                <tr>
                  <td className="border border-border p-2"></td>
                  <td className="border border-border p-2 font-bold">Assessment 2022</td>
                  <td className="border border-border p-2 font-bold">Assessment 2023</td>
                  <td className="border border-border p-2 font-bold">Assessment 2024</td>
                </tr>
                {/* Revenue */}
                <tr>
                  <td className="border border-border p-2 font-bold">Revenue</td>
                  <td className="border border-border p-2 font-bold">23,675,115.00</td>
                  <td className="border border-border p-2 font-bold">22,116,383.00</td>
                  <td className="border border-border p-2 font-bold">35,355,416.40</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-2 px-4 bg-card text-muted-foreground text-xs">
        © Copyright 2026 Nigeria Revenue Service. All Rights Reserved
      </footer>
    </div>
  );
};

export default Index;
