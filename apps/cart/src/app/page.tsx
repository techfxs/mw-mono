export default function Page() {
  return (
    <div className='min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-emerald-100'>
      <div className='text-center'>
        <h1 className='text-5xl font-bold text-gray-900 mb-4'>Cart App</h1>
        <p className='text-lg text-gray-600 mb-8'>
          Shopping cart and item management
        </p>
        <div className='space-x-4'>
          <a
            href='/api/hello'
            className='inline-block bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700 transition'
          >
            Test API
          </a>
        </div>
      </div>
    </div>
  );
}
