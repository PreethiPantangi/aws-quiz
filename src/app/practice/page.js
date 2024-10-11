"use client";

import { FaArrowLeft } from 'react-icons/fa';
import { useRouter } from 'next/navigation'; 
import Question from '../components/Question';

const Certification = () => {
  const router = useRouter();

  const handleBack = () => {
    router.back(); 
  };

  return (
    <main className="flex-grow p-4 pb-10 gap-8 sm:p-10 font-[family-name:var(--font-geist-sans)]">
      <div className="flex items-center hover:underline cursor-pointer mb-5" onClick={handleBack}>
        <FaArrowLeft className="mr-2" />
        <span>Back</span>
      </div>
      <Question/>
    </main>
  );
}

export default Certification;
