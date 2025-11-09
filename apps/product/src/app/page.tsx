export default function Page() {
  return (
    <div className='flex items-center justify-center bg-gray-50 py-12'>
      <div className='text-center px-4'>
        <h1 className='text-4xl font-bold text-gray-900 mb-4'>
          Welcome to Product App
        </h1>
        <p className='text-lg text-gray-600 mb-8'>
          A standalone Next.js application for product management
        </p>
        <div className='space-x-4'>
          <a
            href='/api/hello'
            className='inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition'
          >
            Test API
          </a>
        </div>
      </div>
    </div>
  );
}
