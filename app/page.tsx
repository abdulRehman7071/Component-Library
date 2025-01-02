'use client'
import React from 'react';
import { useState } from 'react';
import Button from '@/app/components/buttons/Button';
import Card from '@/app/components/cards/Card';
import Navbar from '@/app/components/navigation/Navbar';
import LoginForm from '@/app/components/forms/LoginForm';
import Modal from '@/app/components/modals/Modal';
import Accordion from '@/app/components/accordions/Accordion';
import Table from '@/app/components/tables/Table';
import ProgressBar from '@/app/components/progress/ProgressBar';
import Breadcrumbs from '@/app/components/navigation/Breadcrumbs';
import Tooltip from '@/app/components/tooltips/Tooltip';
import Badge from '@/app/components/badges/Badge';
import Calendar from '@/app/components/calendar/Calendar';
import FileUpload from '@/app/components/forms/FileUpload';
import SearchInput from '@/app/components/forms/SearchInput';
import Pagination from '@/app/components/navigation/Pagination';
import Rating from '@/app/components/forms/Rating';
import Toggle from '@/app/components/forms/Toggle';
import Skeleton from '@/app/components/loaders/Skeleton';
import Avatar from '@/app/components/avatar/Avatar';
import CardGrid from '@/app/components/cards/CardGrid';
import Timeline from '@/app/components/timeline/Timeline';
import StatsCard from '@/app/components/stats/StatsCard';
import Toast from '@/app/components/notifications/Toast';

const HomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [showToast, setShowToast] = useState(false);

  // Example data for components
  const accordionItems = [
    { title: 'Section 1', content: 'Content for section 1' },
    { title: 'Section 2', content: 'Content for section 2' },
    { title: 'Section 3', content: 'Content for section 3' },
  ];

  const tableData = {
    columns: [
      { key: 'name', label: 'Name' },
      { key: 'email', label: 'Email' },
      { key: 'role', label: 'Role' },
    ],
    data: [
      { name: 'John Doe', email: 'john@example.com', role: 'Admin' },
      { name: 'Jane Smith', email: 'jane@example.com', role: 'User' },
    ]
  };

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Components', href: '/components' },
    { label: 'Current Page', href: '#' },
  ];

  const timelineItems = [
    {
      type: 'success',
      title: 'Project Launched',
      subtitle: 'Today',
      content: 'Successfully launched the new feature'
    },
    {
      type: 'info',
      title: 'Design Review',
      subtitle: 'Yesterday',
      content: 'Completed design review'
    }
  ];

  const statsData = [
    {
      title: 'Total Revenue',
      value: '$45,231',
      change: '12%',
      trend: 'up',
      description: 'Compared to last month',
      icon: (
        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: 'Active Users',
      value: '2,342',
      change: '5%',
      trend: 'down',
      description: 'Current online users',
      icon: (
        <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      )
    }
  ];

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-white dark:bg-gray-900">
        {/* Theme Toggle */}
        <div className="fixed top-4 right-4 z-50">
          <Toggle
            enabled={darkMode}
            onChange={setDarkMode}
            label="Dark Mode"
            name="darkMode"
            description="Toggle dark mode theme"
            error=""
          />
        </div>

        {/* Navigation */}
        <Navbar />

        {/* Main Content */}
        <main className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
            Tailwind Component Library
          </h1>

          {/* Buttons Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Buttons
            </h2>
            <div className="space-x-4">
              <Button variant="primary">Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
            </div>
          </section>

          {/* Cards Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Cards
            </h2>
            <CardGrid columns={{ default: 1, sm: 1, md: 2, lg: 3 }} gap={6}>
              <Card
                title="Card Title"
                subtitle="Card Subtitle"
                content="This is a sample card content."
                image="https://via.placeholder.com/300"
                footer="This is a footer"
                actions={<Button variant="primary">Action</Button>}
              />
              <Card
                title="Another Card"
                subtitle="Another Subtitle"
                content="More sample content here."
                image="https://via.placeholder.com/300"
                footer="This is a footer"
                actions={<Button variant="primary">Action</Button>}
              />
            </CardGrid>
          </section>

          {/* Forms Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Forms
            </h2>
            <div className="max-w-md">
              <LoginForm onSubmit={() => {}} />
            </div>
          </section>

          {/* Modal Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Modal
            </h2>
            <Button onClick={() => setIsModalOpen(true)}>Open Modal</Button>
            <Modal
              isOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)}
              title="Sample Modal"
            >
              <p>This is the modal content.</p>
            </Modal>
          </section>

          {/* Accordion Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Accordion
            </h2>
            <div className="max-w-2xl">
              <Accordion items={accordionItems} />
            </div>
          </section>

          {/* Table Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Table
            </h2>
            <Table 
              columns={tableData.columns}
              data={tableData.data}
              itemsPerPage={5}
            />
          </section>

          {/* Progress Bar Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Progress Bars
            </h2>
            <div className="space-y-4 max-w-xl">
              <ProgressBar progress={75} />
              <ProgressBar progress={50} color="green" />
              <ProgressBar progress={25} color="red" size="lg" />
            </div>
          </section>

          {/* Breadcrumbs Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Breadcrumbs
            </h2>
            <Breadcrumbs items={breadcrumbItems} />
          </section>

          {/* Tooltips Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Tooltips
            </h2>
            <div className="space-x-4">
              <Tooltip content="Top tooltip" position="top">
                <Button>Hover me (Top)</Button>
              </Tooltip>
              <Tooltip content="Bottom tooltip" position="bottom">
                <Button>Hover me (Bottom)</Button>
              </Tooltip>
            </div>
          </section>

          {/* Badges Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Badges
            </h2>
            <div className="space-x-2">
              <Badge variant="primary" onRemove={() => {}}>Primary</Badge>
              <Badge variant="success" onRemove={() => {}}>Success</Badge>
              <Badge variant="danger" onRemove={() => {}}>Danger</Badge>
              <Badge variant="warning" dot onRemove={() => {}}>Warning</Badge>
              <Badge variant="info" rounded onRemove={() => {}}>Info</Badge>
            </div>
          </section>

          {/* Calendar Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Calendar
            </h2>
            <div className="max-w-sm">
              <Calendar 
                selectedDate={new Date()} 
                onDateSelect={(date: Date) => console.log(date)}
                minDate={new Date(2024, 0, 1)}
                maxDate={new Date(2024, 11, 31)}
              />
            </div>
          </section>

          {/* File Upload Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              File Upload
            </h2>
            <div className="max-w-xl">
              <FileUpload 
                accept=".jpg,.png,.pdf"
                onUpload={(files: File[]) => console.log(files)}
                onError={(error: Error) => console.error(error)}
              />
            </div>
          </section>

          {/* Search Input Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Search Input
            </h2>
            <div className="max-w-xl">
              <SearchInput 
                placeholder="Search items..."
                data={['Apple', 'Banana', 'Orange', 'Mango']}
                onSearch={(value: string) => console.log(value)}
              />
            </div>
          </section>

          {/* Pagination Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Pagination
            </h2>
            <Pagination 
              totalItems={100}
              itemsPerPage={10}
              currentPage={1}
              onPageChange={(page: number) => console.log(page)}
            />
          </section>

          {/* Rating Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Rating
            </h2>
            <div className="space-y-4">
              <Rating value={4} showValue onChange={(value: number) => console.log(value)} />
              <Rating value={3.5} total={5} size="lg" onChange={(value: number) => console.log(value)} />
            </div>
          </section>

          {/* Toggle Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Toggle
            </h2>
            <div className="space-y-4">
              <Toggle label="Normal toggle" />
              <Toggle label="Colored toggle" color="green" />
              <Toggle label="Large toggle" size="lg" />
            </div>
          </section>

          {/* Skeleton Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Skeleton Loader
            </h2>
            <div className="max-w-xl space-y-4">
              <Skeleton variant="text" count={3} width="100%" height={20} />
              <Skeleton variant="circle" width={50} height={50} />
              <Skeleton variant="rectangle" width="100%" height={200} />
            </div>
          </section>

          {/* Avatar Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Avatars
            </h2>
            <div className="flex space-x-4">
              <Avatar 
                src="https://example.com/avatar.jpg" 
                alt="User"
                size="lg"
                status="online"
                online={true}
                initials="JD"
              />
              <Avatar 
                initials="JD"
                size="md"
                shape="square"
                src=""
                alt="User"
                status="offline"
                online={false}
              />
              <Avatar 
                size="sm"
                status="away"
                src=""
                alt="User"
                online={false}
                initials="JS"
              />
            </div>
          </section>

          {/* Timeline Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Timeline
            </h2>
            <div className="max-w-2xl">
              <Timeline items={timelineItems} />
            </div>
          </section>

          {/* Stats Cards Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Stats Cards
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {statsData.map((stat, index) => (
                <StatsCard key={index} {...stat} />
              ))}
            </div>
          </section>

          {/* Toast Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Toast Notifications
            </h2>
            <div className="space-x-4">
              <Button onClick={() => setShowToast(true)}>
                Show Toast
              </Button>
            </div>
          </section>

          {/* Toast Component */}
          {showToast && (
            <Toast
              message="This is a sample notification"
              type="success"
              onClose={() => setShowToast(false)}
            />
          )}
        </main>
      </div>
    </div>
  );
};

export default HomePage;
