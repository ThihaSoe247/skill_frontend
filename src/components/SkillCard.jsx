import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";

export default function SkillCard({
  skill,
  onDeleted,
  token,
  readonly = false,
}) {
  const handleDelete = async () => {
    if (!token || !onDeleted) return;

    try {
      const confirm = window.confirm(
        `Are you sure you want to delete "${skill.teach}"?`
      );
      if (!confirm) return;

      await axios.delete(`/api/skills/${skill._id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      onDeleted(skill._id);
    } catch (err) {
      console.error("Failed to delete skill:", err);
      alert("Failed to delete skill.");
    }
  };
  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden h-full">
      {/* Header with gradient */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-bold text-white truncate max-w-48">
                {skill.teach}
              </h3>
              <p className="text-blue-100 text-sm">Teaching</p>
            </div>
          </div>
          {!readonly && (
            <div className="flex space-x-1">
              <Link
                to={`/skills/edit/${skill._id}`}
                className="inline-flex items-center justify-center w-8 h-8 bg-white/20 hover:bg-white/30 rounded-lg transition-colors duration-200"
              >
                <svg
                  className="w-4 h-4 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                  />
                </svg>
              </Link>
              <button
                onClick={handleDelete}
                className="inline-flex items-center justify-center w-8 h-8 bg-red-500/20 hover:bg-red-500/30 rounded-lg transition-colors duration-200"
              >
                <svg
                  className="w-4 h-4 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  />
                </svg>
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Learning Section */}
        <div className="mb-6">
          <div className="flex items-center space-x-2 mb-2">
            <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
              <svg
                className="w-3 h-3 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
            </div>
            <span className="text-sm font-medium text-gray-500">
              Wants to learn
            </span>
          </div>
          <p className="text-gray-900 font-semibold text-lg">{skill.learn}</p>
        </div>

        {/* Description */}
        {skill.description && (
          <div className="mb-6">
            <p className="text-gray-600 leading-relaxed line-clamp-3">
              {skill.description}
            </p>
          </div>
        )}

        {/* User Info */}
        <div className="flex items-center space-x-3 pt-4 border-t border-gray-100">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center">
            <svg
              className="w-4 h-4 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </div>
          <div>
            <p className="text-gray-900 font-medium text-sm">
              {skill.user?.name || "Unknown User"}
            </p>
            <p className="text-gray-500 text-xs">Skill Creator</p>
          </div>
        </div>
      </div>
    </div>
  );
}
