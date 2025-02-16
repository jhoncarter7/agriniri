// Components/WorkflowCard.jsx
import PropTypes from 'prop-types';

const WorkflowCard = ({ type, title, items }) => {
    const config = {
      farmers: {
        bg: 'from-green-400 to-emerald-600',
        iconBg: 'bg-green-500',
        bullet: 'bg-green-500',
        shadow: 'shadow-green-500',
        icon: (
          <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
        )
      },
      agriniri: {
        bg: 'from-blue-400 to-indigo-600',
        iconBg: 'bg-blue-500',
        bullet: 'bg-blue-500',
        shadow: 'shadow-blue-500',
        icon: (
          <path d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"/>
        )
      },
      retailers: {
        bg: 'from-purple-400 to-fuchsia-600',
        iconBg: 'bg-purple-500',
        bullet: 'bg-purple-500',
        shadow: 'shadow-purple-500',
        icon: (
          <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/>
        )
      },
      consumers: {
        bg: 'from-orange-400 to-red-500',
        iconBg: 'bg-orange-500',
        bullet: 'bg-orange-500',
        shadow: 'shadow-orange-500',
        icon: (
          <path d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/>
        )
      }
    };
  
    return (
      <div className="relative z-10 group w-full lg:w-72 hover:transform hover:-translate-y-2 transition-all duration-300 font-family-gilroy">
        <div className={`bg-gradient-to-br ${config[type].bg} rounded-2xl p-[3px] shadow-2xl ${config[type].shadow}`}>
          <div className="bg-zinc-300 rounded-xl p-6">
            <div className={`w-14 h-14 ${config[type].iconBg} rounded-lg flex items-center justify-center mb-6 shadow-lg`}>
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {config[type].icon}
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">{title}</h3>
            <ul className="space-y-3">
              {items?.map((item, index) => (
                <li key={index} className="flex items-center gap-2 text-gray-600">
                  <div className={`w-2 h-2 ${config[type].bullet} rounded-full`}></div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        {type !== 'consumers' && (
          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity">
            ↓
          </div>
        )}
      </div>
    );
  };
  WorkflowCard.propTypes = {
    type: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(PropTypes.string).isRequired,
  };

  export default WorkflowCard;
