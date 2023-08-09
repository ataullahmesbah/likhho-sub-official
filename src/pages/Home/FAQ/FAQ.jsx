import { useState } from 'react';
import Container from '../../shared/Container';


const FAQ = () => {
    const [accordionStates, setAccordionStates] = useState([
        false,
        false,
        false,
        false,
    ]);

    const toggleAccordion = (index) => {
        const newAccordionStates = [...accordionStates];
        newAccordionStates[index] = !newAccordionStates[index];
        setAccordionStates(newAccordionStates);
    };

    const faqs = [
        {
            question: 'Question 1?',
            answer: 'This website is top website....',
        },
        {
            question: 'Question 2?',
            answer: 'Answer 2.',
        },
        {
            question: 'Question 3?',
            answer: 'Answer 3.',
        },
        {
            question: 'Question 4?',
            answer: 'Answer 4.',
        },
    ];

    return (
        <Container>
            <h1 className='text-center pt-10 font-bold text-5xl'>Frequently Asked Question </h1>
            <div className="m-10 lg:mx-36 mb-20" id="accordion-collapse" data-accordion="collapse">
                {faqs.map((faq, index) => (
                    <div key={index}>
                        <h2>
                            <button
                                type="button"
                                className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                                onClick={() => toggleAccordion(index)}
                                aria-expanded={accordionStates[index]}
                                aria-controls={`accordion-collapse-body-${index}`}
                            >
                                <span>{faq.question}</span>
                                <svg
                                    data-accordion-icon
                                    className={`w-3 h-3 rotate-180 shrink-0 ${accordionStates[index] ? 'transform rotate-0' : ''
                                        }`}
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 10 6"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M9 5 5 1 1 5"
                                    />
                                </svg>
                            </button>
                        </h2>
                        <div
                            id={`accordion-collapse-body-${index}`}
                            className={`p-5 border border-b-0 border-gray-200 dark:border-red-700 dark:bg-gray-900 ${accordionStates[index] ? '' : 'hidden'
                                }`}
                            aria-labelledby={`accordion-collapse-heading-${index}`}
                        >
                            <p className="mb-2 text-gray-500 dark:text-gray-400">{faq.answer}</p>
                        </div>
                    </div>
                ))}
            </div>
        </Container>
    );
};

export default FAQ;
