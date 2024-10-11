"use client";

import withAuth from '../withAuth'

const Dashboard = () => {
  return (
    <div className="flex-grow p-4 pb-10 gap-8 sm:p-10 font-[family-name:var(--font-geist-sans)]">Dashboard</div>
  )
}

export default withAuth(Dashboard);