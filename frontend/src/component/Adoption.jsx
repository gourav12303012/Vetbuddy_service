import React, { useState } from 'react';
import Navbar from './Navbar';
import { Search, Filter, X } from 'lucide-react';

const Adoption = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [selectedPet, setSelectedPet] = useState(null);
  const [showAdoptionForm, setShowAdoptionForm] = useState(false);

  // Sample pet data - replace with actual data from your backend
  const pets = [
    {
      id: 1,
      name: 'Max',
      type: 'Dog',
      breed: 'Labrador Retriever',
      age: '2 years',
      gender: 'Male',
      image: '/images/dog5.jpg',
      description: 'Friendly and energetic, great with kids and other pets.',
      status: 'Available'
    },
    {
      id: 2,
      name: 'Luna',
      type: 'Cat',
      breed: 'Siamese',
      age: '1 year',
      gender: 'Female',
      image: '/images/cat5.jpg',
      description: 'Playful and affectionate, loves cuddles.',
      status: 'Available'
    },
    {
      id: 2,
      name: 'Bruno',
      type: 'Dog',
      breed: 'Pomeranian',
      age: '1 year',
      gender: 'Female',
      image: '/images/dog6.png',
      description: 'Playful and affectionate, loves cuddles.',
      status: 'Available'
    },
    
    // Add more pets as needed
  ];

  const filteredPets = pets.filter(pet => {
    const matchesSearch = pet.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         pet.breed.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = selectedFilter === 'all' || pet.type.toLowerCase() === selectedFilter;
    return matchesSearch && matchesFilter;
  });

  const handleAdoptClick = (pet) => {
    setSelectedPet(pet);
    setShowAdoptionForm(true);
  };

  const handleCloseForm = () => {
    setShowAdoptionForm(false);
    setSelectedPet(null);
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted for pet:', selectedPet);
    handleCloseForm();
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Find Your <span className="text-lime-500">Perfect</span> Pet
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Give a loving home to pets in need. Browse through our available pets and find your new best friend.
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search by name or breed..."
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-lime-200 focus:border-lime-500 transition"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex items-center gap-2">
            <Filter className="text-gray-400" />
            <select
              className="px-4 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-lime-200 focus:border-lime-500 transition"
              value={selectedFilter}
              onChange={(e) => setSelectedFilter(e.target.value)}
            >
              <option value="all">All Pets</option>
              <option value="dog">Dogs</option>
              <option value="cat">Cats</option>
              <option value="other">Others</option>
            </select>
          </div>
        </div>

        {/* Pets Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPets.map((pet) => (
            <div key={pet.id} className="bg-white rounded-2xl shadow-xl overflow-hidden transition-transform hover:scale-105">
              <div className="relative">
                <img
                  src={pet.image}
                  alt={pet.name}
                  className="w-full h-90 object-cover"
                />
                <div className="absolute top-4 right-4 bg-lime-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {pet.status}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{pet.name}</h3>
                <div className="flex items-center gap-4 text-gray-600 mb-4">
                  <span>{pet.type}</span>
                  <span>•</span>
                  <span>{pet.breed}</span>
                  <span>•</span>
                  <span>{pet.age}</span>
                </div>
                <p className="text-gray-600 mb-6">{pet.description}</p>
                <button 
                  onClick={() => handleAdoptClick(pet)}
                  className="w-full bg-lime-500 hover:bg-lime-600 text-white font-semibold py-3 rounded-xl transition duration-200"
                >
                  Adopt {pet.name}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Adoption Form Modal */}
        {showAdoptionForm && selectedPet && (
          <div className="fixed inset-0 bg-white flex items-center justify-center z-50">
            <div className="bg-white rounded-2xl p-8 max-w-2xl w-full mx-4 shadow-xl">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800">Adopt {selectedPet.name}</h2>
                <button 
                  onClick={handleCloseForm}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X size={24} />
                </button>
              </div>
              
              <form onSubmit={handleSubmitForm} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-lime-200 focus:border-lime-500 transition"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-lime-200 focus:border-lime-500 transition"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      required
                      className="w-full px-4 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-lime-200 focus:border-lime-500 transition"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Address
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-lime-200 focus:border-lime-500 transition"
                      placeholder="Enter your address"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Why do you want to adopt {selectedPet.name}?
                  </label>
                  <textarea
                    required
                    rows="4"
                    className="w-full px-4 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-lime-200 focus:border-lime-500 transition"
                    placeholder="Tell us about yourself and why you'd be a good pet parent"
                  />
                </div>

                <div className="flex justify-end gap-4">
                  <button
                    type="button"
                    onClick={handleCloseForm}
                    className="px-6 py-2 border border-gray-300 rounded-xl text-gray-700 hover:bg-gray-50 transition"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2 bg-lime-500 text-white rounded-xl hover:bg-lime-600 transition"
                  >
                    Submit Application
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* No Results Message */}
        {filteredPets.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No pets found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Adoption; 