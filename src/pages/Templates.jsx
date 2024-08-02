import React from 'react';
import Navbar from '../components/Navbar';
import TemplateTable from '../components/Tables/TemplateTable';

const Templates = () => {
  const columns = React.useMemo(() => [
    {
      Header: 'Title',
      accessor: 'title',
    },
    {
      Header: 'Body',
      accessor: 'body',
    },
    {
      Header: 'Variables Used',
      accessor: 'variables',
    },
  ], []);

  const data = React.useMemo(() => [
    {
      title: 'Step into Style with [Your Shoe brand]!',
      titleSubheading: 'Your personalized shoe style',
      body: 'Circooles Web app integrations',
      bodySubheading: 'Seamless app integration for your workflow',
      variables: ['labels', 'labels', 'labels', 'labels', 'labels'],
    },
    {
      title: 'Title',
      titleSubheading: 'Main heading of the title',
      body: 'Label Label Label +3',
      bodySubheading: 'Detailed explanation of the body',
      variables: ['Label', 'Label', 'Label','Label'],
    },
    {
      title: 'Title',
      titleSubheading: 'Main heading of the title',
      body: 'Label Label Label +3',
      bodySubheading: 'Detailed explanation of the body',
      variables: ['Label', 'Label', 'Label','Label','Label','Label'],
    },
    {
      title: 'Subject',
      titleSubheading: 'Subject description',
      body: 'Step into Style with [Your Shoe brand]!',
      bodySubheading: 'Additional body details',
      variables: ['labels', 'labels'],
    },
    {
      title: 'Circooles',
      titleSubheading: 'Web app integrations',
      body: 'Web app integrations',
      bodySubheading: 'Detailed body description',
      variables: ['Label', 'Label', 'Label'],
    },
    {
      title: 'getcirooles.com',
      titleSubheading: 'Connect web apps seamlessly',
      body: 'Connect web apps seamlessly',
      bodySubheading: 'More details on integration',
      variables: ['labels'],
    },
  ], []);

  return (
    <main>
      <Navbar />
      <div className='m-6'>
        <h1 className='text-xl font-medium'>Your Templates</h1>
        <p className='text-sm font-light text-gray-600 mb-4'>Your templates are saved here</p>
        <TemplateTable columns={columns} data={data} />
      </div>
    </main>
  );
};

export default Templates;
