import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Navigation Menu */}
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-indigo-600">Tailwind Tutorial by Christian Laniba</h1>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#step1" className="text-gray-700 hover:text-indigo-600 transition">Step 1</a>
              <a href="#step2" className="text-gray-700 hover:text-indigo-600 transition">Step 2</a>
              <a href="#step3" className="text-gray-700 hover:text-indigo-600 transition">Step 3</a>
              <a href="#step4" className="text-gray-700 hover:text-indigo-600 transition">Step 4</a>
              <a href="#step5" className="text-gray-700 hover:text-indigo-600 transition">Step 5</a>
              <a href="#layouts" className="text-gray-700 hover:text-indigo-600 transition">Layouts</a>
            </div>
            <button className="md:hidden">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
            Tailwind CSS Step-by-Step Tutorial
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Learn Tailwind CSS by following these simple, practical steps!
          </p>
        </div>

        {/* Step1 */}
        <section id="step1" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Step 1: What is Tailwind CSS?</h2>
          <div className="bg-white rounded-lg shadow-md p-8 space-y-4">
            <p className="text-lg text-gray-900">Tailwind CSS is a <b>utility-first CSS framework</b> that lets you style elements directly in your HTML using predefined classes.</p>
            <p className="text-lg text-gray-900">Instead of writing custom CSS like this:</p>
            <div className="bg-gray-800 text-gray-100 p-4 rounded-lg font-mono text-sm">
              <div className="text-green-400">/* Traditional CSS */</div>
              <div>.my-button {'{'}</div>
              <div className="ml-4">background-color: #3b82f6;</div>
              <div className="ml-4">color: white;</div>
              <div className="ml-4">padding: 0.5rem 1rem;</div>
              <div className="ml-4">border-radius: 0.375rem;</div>
              <div>{'}'}</div>
            </div>
            
            <p className="text-lg text-gray-900">You simply add Tailwind classes like this:</p>
            <div className="bg-gray-800 text-gray-100 p-4 rounded-lg font-mono text-sm">
              <div className="text-green-400">{'<!-- Tailwind CSS -->'}</div>
              <div>{'<button class="bg-blue-500 text-white px-4 py-2 rounded">'}</div>
              <div className="ml-4">Click me</div>
              <div>{'</button>'}</div>
            </div>
            
          </div>
        </section>

        {/* Step2 */}
        <section id="step2" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Step 2: Setting Up Tailwind CSS</h2>
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">Method 1: Using Next.js (Recommended)</h3>
                <div className="bg-gray-800 text-gray-100 p-4 rounded-lg font-mono text-sm">
                  <div className="text-yellow-400"># Install Next.js with Tailwind</div>
                  <div>npx create-next-app@latest my-app --tailwind</div>
                  <div className="mt-4 text-yellow-400"># Navigate to project</div>
                  <div>cd my-app</div>
                  <div className="mt-4 text-yellow-400"># Start development server</div>
                  <div>npm run dev</div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">Method 2: Using CDN (Quick Start)</h3>
                <p className="text-gray-700 mb-3">Add this to your HTML head section:</p>
                <div className="bg-gray-800 text-gray-100 p-4 rounded-lg font-mono text-sm">
                  <div>{'<script src="https://cdn.tailwindcss.com"></script>'}</div>
                </div>
      
              </div>
            </div>
            
          </div>
        </section>

        {/* Step3 */}
        <section id="step3" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Step 3: Creating Layouts & Backgrounds</h2>
          <div className="bg-white rounded-lg shadow-md p-8 space-y-6">
            <p className="text-lg text-gray-900">Tailwind makes it easy to create full-screen layouts with gradients:</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-lg mb-3 text-gray-800">Code Example:</h4>
                <div className="bg-gray-800 text-gray-100 p-4 rounded-lg font-mono text-sm">
                  <div>{'<div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">'}</div>
                  <div className="ml-4">{'<!-- Your content here -->'}</div>
                  <div>{'</div>'}</div>
                </div>
              </div>
              
              <div>
                <h4 className="font-bold text-lg mb-3 text-gray-800">Classes Explained:</h4>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="bg-blue-100 text-blue-800 text-xs font-bold px-2 py-1 rounded mr-2">min-h-screen</span>
                    <span className="text-gray-700">Makes div full height</span>
                  </li>
                  <li className="flex items-center">
                    <span className="bg-blue-100 text-blue-800 text-xs font-bold px-2 py-1 rounded mr-2">bg-gradient-to-br</span>
                    <span className="text-gray-700">Diagonal gradient</span>
                  </li>
                  <li className="flex items-center">
                    <span className="bg-blue-100 text-blue-800 text-xs font-bold px-2 py-1 rounded mr-2">from-blue-50</span>
                    <span className="text-gray-700">Start color (light blue)</span>
                  </li>
                  <li className="flex items-center">
                    <span className="bg-blue-100 text-blue-800 text-xs font-bold px-2 py-1 rounded mr-2">to-indigo-100</span>
                    <span className="text-gray-700">End color (light indigo)</span>
                  </li>
                </ul>
              </div>
            </div>
            
          </div>
        </section>

        {/* Step4 */}
        <section id="step4" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Step 4: Typography & Text Styling</h2>
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="space-y-6">
              <p className="text-lg text-gray-900">Tailwind provides comprehensive typography utilities:</p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h5 className="font-bold mb-2 text-gray-900">Text Size</h5>
                  <p className="text-sm text-gray-700">text-sm - Small</p>
                  <p className="text-base text-gray-700">text-base - Normal</p>
                  <p className="text-lg text-gray-700">text-lg - Large</p>
                  <p className="text-xl text-gray-700">text-xl - Extra Large</p>
                  <p className="text-2xl text-gray-700">text-2xl - 2XL</p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h5 className="font-bold mb-2 text-gray-800">Font Weight</h5>
                  <p className="font-light text-gray-700">font-light - Light</p>
                  <p className="font-normal text-gray-700">font-normal - Normal</p>
                  <p className="font-medium text-gray-700">font-medium - Medium</p>
                  <p className="font-bold text-gray-700">font-bold - Bold</p>
                  <p className="font-extrabold text-gray-700">font-extrabold - Extra Bold</p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h5 className="font-bold mb-2 text-gray-800">Text Color</h5>
                  <p className="text-gray-900">text-gray-900 - Dark</p>
                  <p className="text-gray-600">text-gray-600 - Medium</p>
                  <p className="text-gray-400">text-gray-400 - Light</p>
                  <p className="text-red-600">text-red-600 - Red</p>
                  <p className="text-green-600">text-green-600 - Green</p>
                  <p className="text-blue-600">text-blue-600 - Blue</p>
                </div>
              </div>
              
              <div className="bg-gray-800 text-gray-100 p-4 rounded-lg font-mono text-sm">
                <div className="text-green-400">{'<!-- Example: Creating a heading -->'}</div>
                <div>{'<h1 className="text-4xl font-bold text-gray-900 mb-4">'}</div>
                <div className="ml-4">Welcome to Tailwind!</div>
                <div>{'</h1>'}</div>
                <div className="mt-2">{'<p className="text-lg text-gray-600">'}</div>
                <div className="ml-4">This is a description paragraph.</div>
                <div>{'</p>'}</div>
              </div>
            </div>
          </div>
        </section>

        {/* Step5 */}
        <section id="step5" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Step 5: Creating Buttons with Hover Effects</h2>
          <div className="bg-white rounded-lg shadow-md p-8">
            <p className="text-lg text-gray-900 mb-6">Buttons in Tailwind are built by combining multiple utility classes:</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-lg mb-4 text-gray-800">Button Examples:</h4>
                <div className="space-y-4">
                  <div>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded transition duration-300">
                      Primary Button
                    </button>
                  </div>
                  
                  <div>
                    <button className="border-2 border-green-500 text-green-600 hover:bg-green-500 hover:text-white font-bold py-2 px-6 rounded transition duration-300">
                      Outline Button
                    </button>
                  </div>
                  
                  <div>
                    <button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-2 px-6 rounded transition duration-300 shadow-lg">
                      Gradient Button
                    </button>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-bold text-lg mb-4 text-gray-800">Code Breakdown:</h4>
                <div className="bg-gray-800 text-gray-100 p-4 rounded-lg font-mono text-sm">
                  <div>{'<button className="'}</div>
                  <div className="ml-4 text-blue-300">bg-blue-500</div>
                  <div className="ml-4 text-green-300">hover:bg-blue-600</div>
                  <div className="ml-4 text-yellow-300">text-white</div>
                  <div className="ml-4 text-purple-300">font-bold</div>
                  <div className="ml-4 text-pink-300">py-2 px-6</div>
                  <div className="ml-4 text-indigo-300">rounded</div>
                  <div className="ml-4 text-teal-300">transition duration-300</div>
                  <div>{'">'}</div>
                  <div className="ml-4">Click me</div>
                  <div>{'</button>'}</div>
                </div>
                
              </div>
            </div>
          </div>
        </section>

        {/* Step6 */}
        <section id="step6" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Step 6: Working with Colors & Grids</h2>
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="space-y-6">
              <p className="text-lg text-gray-900">Tailwind has a built-in color palette and powerful grid system:</p>
              
              <div className="mb-8">
                <h4 className="text-xl font-bold mb-4 text-gray-800">Color Palette:</h4>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                  {['red', 'blue', 'green', 'yellow', 'purple', 'pink'].map((color) => (
                    <div key={color} className="text-center">
                      <div 
                        className={`w-full h-16 bg-${color}-500 rounded-lg mb-2`}
                        style={{ backgroundColor: getComputedColor(color) }}
                      ></div>
                      <p className="text-sm font-medium capitalize">{color}</p>
                      <p className="text-xs text-gray-500">{`bg-${color}-500`}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="text-xl font-bold mb-4 text-gray-800">Grid Layout Example:</h4>
                <div className="bg-gray-800 text-gray-100 p-4 rounded-lg font-mono text-sm mb-4">
                  <div>{'<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">'}</div>
                  <div className="ml-4">{'<!-- Cards go here -->'}</div>
                  <div>{'</div>'}</div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {['Mobile: 1 column', 'Tablet: 2 columns', 'Desktop: 3 columns'].map((text, i) => (
                    <div key={i} className="bg-gradient-to-br from-indigo-100 to-blue-100 p-6 rounded-lg border border-indigo-200">
                      <h5 className="font-bold text-lg mb-2 text-gray-900">Responsive Grid</h5>
                      <p className="text-gray-700">{text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Layouts Section */}
        <section id="layouts" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Step 7: Responsive Design Examples</h2>
          
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h3 className="text-xl font-bold mb-4 text-gray-900">Grid Layout</h3>
            <p className="text-gray-900 mb-4">This grid changes based on screen size using responsive prefixes:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-gradient-to-br from-blue-400 to-blue-600 text-white p-6 rounded-lg">
                <h4 className="font-bold text-lg mb-2">Card 1</h4>
                <p>On mobile: 1 column</p>
                <p className="text-sm opacity-90">grid-cols-1</p>
              </div>
              <div className="bg-gradient-to-br from-green-400 to-green-600 text-white p-6 rounded-lg">
                <h4 className="font-bold text-lg mb-2">Card 2</h4>
                <p>On tablet: 2 columns</p>
                <p className="text-sm opacity-90">md:grid-cols-2</p>
              </div>
              <div className="bg-gradient-to-br from-purple-400 to-purple-600 text-white p-6 rounded-lg">
                <h4 className="font-bold text-lg mb-2">Card 3</h4>
                <p>On desktop: 3 columns</p>
                <p className="text-sm opacity-90">lg:grid-cols-3</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-xl font-bold mb-4 text-gray-900">Flex Layout</h3>
            <p className="text-gray-700 mb-4">Flexbox for horizontal layouts that wrap on small screens:</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <div className="bg-red-500 text-white p-4 rounded-lg flex-shrink-0">Item 1</div>
              <div className="bg-orange-500 text-white p-4 rounded-lg flex-shrink-0">Item 2</div>
              <div className="bg-yellow-500 text-white p-4 rounded-lg flex-shrink-0">Item 3</div>
              <div className="bg-teal-500 text-white p-4 rounded-lg flex-shrink-0">Item 4</div>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-lg">Built with Next.js and Tailwind CSS</p>
          <p className="text-sm text-gray-400 mt-2">A complete step-by-step tutorial for beginners</p>
        </div>
      </footer>
    </div>
  );
}


function getComputedColor(color) {
  const colors = {
    red: '#ef4444',
    blue: '#3b82f6',
    green: '#10b981',
    yellow: '#f59e0b',
    purple: '#8b5cf6',
    pink: '#ec4899'
  };
  return colors[color] || '#6b7280';
}