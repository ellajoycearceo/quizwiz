import React from 'react';
import { Plus, GripVertical, X, ChevronDown } from 'lucide-react';

interface Question {
  id: number;
  type: string;
  question: string;
  options: string[];
}

interface QuestionEditorProps {
  questions: Question[];
  setQuestions: React.Dispatch<React.SetStateAction<Question[]>>;
}

const QuestionEditor: React.FC<QuestionEditorProps> = ({ questions, setQuestions }) => {
  const addQuestion = () => {
    const newQuestion: Question = {
      id: Date.now(),
      type: 'multiple-choice',
      question: '',
      options: ['Option 1', 'Option 2']
    };
    setQuestions([...questions, newQuestion]);
  };

  const removeQuestion = (id: number) => {
    setQuestions(questions.filter(q => q.id !== id));
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-900">Questions</h3>
        <button
          onClick={addQuestion}
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg text-white bg-primary-600 hover:bg-primary-700 transition-colors duration-200"
        >
          <Plus className="mr-2 h-4 w-4" />
          Add Question
        </button>
      </div>

      <div className="space-y-4">
        {questions.map((question, index) => (
          <div key={question.id} className="bg-gray-50 rounded-lg p-6 border border-gray-200">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 mt-2">
                <GripVertical className="h-5 w-5 text-gray-400" />
              </div>
              
              <div className="flex-1 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-500">Question {index + 1}</span>
                  <div className="flex items-center space-x-2">
                    <select className="text-sm border border-gray-300 rounded-md px-3 py-1 focus:ring-2 focus:ring-primary-500 focus:border-primary-500">
                      <option value="multiple-choice">Multiple Choice</option>
                      <option value="true-false">True/False</option>
                      <option value="open-ended">Open Ended</option>
                      <option value="rating">Rating Scale</option>
                    </select>
                    <button
                      onClick={() => removeQuestion(question.id)}
                      className="p-1 text-gray-400 hover:text-error-600 transition-colors duration-200"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Question Text</label>
                  <input
                    type="text"
                    defaultValue={question.question}
                    placeholder="Enter your question..."
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200"
                  />
                </div>
                
                {question.type === 'multiple-choice' && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Answer Options</label>
                    <div className="space-y-2">
                      {question.options.map((option, optionIndex) => (
                        <div key={optionIndex} className="flex items-center space-x-2">
                          <input
                            type="text"
                            defaultValue={option}
                            className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                          />
                          <select className="text-sm border border-gray-300 rounded-md px-2 py-2">
                            <option>→ Lead Type A</option>
                            <option>→ Lead Type B</option>
                            <option>→ Lead Type C</option>
                          </select>
                        </div>
                      ))}
                      <button className="text-primary-600 hover:text-primary-700 text-sm font-medium">
                        + Add Option
                      </button>
                    </div>
                  </div>
                )}
                
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="text-sm font-medium text-blue-900 mb-2">Segmentation Logic</h4>
                  <p className="text-sm text-blue-700">
                    Each answer option can route users to different lead segments. Configure the logic above to automatically categorize leads based on their responses.
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuestionEditor;