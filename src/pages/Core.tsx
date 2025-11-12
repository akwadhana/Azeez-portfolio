import { motion } from "framer-motion";
import { 
  FaClipboardCheck, 
  FaUsers, 
  FaFileAlt, 
  FaShieldAlt, 
  FaSyncAlt, 
  FaLayerGroup, 
  FaHeadset 
} from "react-icons/fa";

const Core = () => {
  return (
    <section className="mt-20 bg-white text-gray-800 rounded-2xl p-6 sm:p-10 shadow-2xl">
      {/* ------------------- Core Strengths Section ------------------- */}
      <div className="text-center mb-10">
        <h2 className="text-2xl sm:text-3xl font-bold text-blue-800">Core Strengths</h2>
        <p className="text-gray-500 mt-2 text-sm sm:text-base">
          Comprehensive expertise across all aspects of enterprise project management,
          from strategic planning to successful delivery.
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {[
          { icon: <FaClipboardCheck />, title: "Project Lifecycle Governance", desc: "Initiation → Delivery → Closure" },
          { icon: <FaUsers />, title: "Stakeholder Engagement", desc: "Executive Communication" },
          { icon: <FaFileAlt />, title: "SOW Validation", desc: "Quality Assurance" },
          { icon: <FaShieldAlt />, title: "Risk & Financial Management", desc: "Budget Control & Risk Mitigation" },
          { icon: <FaSyncAlt />, title: "Agile and Hybrid Delivery", desc: "Flexible Project Methodologies" },
          { icon: <FaLayerGroup />, title: "Cross-Functional Leadership", desc: "Team Coordination & Management" },
          { icon: <FaHeadset />, title: "Customer Success", desc: "Business Value Realization" },
        ].map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="p-6 bg-blue-50 rounded-xl border border-blue-100 shadow-sm hover:shadow-md cursor-pointer"
          >
            <div className="text-blue-600 text-3xl mb-3">{item.icon}</div>
            <h3 className="text-lg font-semibold text-blue-900">{item.title}</h3>
            <p className="text-sm text-gray-500">{item.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default Core;
