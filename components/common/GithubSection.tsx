"use client";

import { useEffect, useState } from "react";
import { GitHubCalendar } from "react-github-calendar";
import {
  FaUsers,
  FaUserPlus,
  FaCode,
  FaCodeBranch,
  FaExclamationCircle,
  FaBook,
  FaBuilding,
} from "react-icons/fa";

interface GitHubData {
  followers: number;
  following: number;
  repos: number;
  totalContributions: number;
  commits: number;
  pullRequests: number;
  issues: number;
  organizations: { login: string; name: string; avatarUrl: string }[];
}

interface StatCardProps {
  icon: React.ReactNode;
  label: string;
  value: number | string;
  color: string;
}

function StatCard({ icon, label, value, color }: StatCardProps) {
  return (
    <div className="bg-[#161b22] border border-gray-800 rounded-xl p-4 text-center hover:border-gray-600 transition-colors duration-200">
      <div className={`flex justify-center mb-2 text-xl ${color}`}>{icon}</div>
      <p className="text-xs text-gray-500 mb-1">{label}</p>
      <h3 className="text-xl font-bold text-white">{value}</h3>
    </div>
  );
}

function SkeletonCard() {
  return (
    <div className="bg-[#161b22] border border-gray-800 rounded-xl p-4 animate-pulse">
      <div className="flex justify-center mb-2">
        <div className="w-5 h-5 bg-gray-700 rounded" />
      </div>
      <div className="h-3 bg-gray-700 rounded w-2/3 mx-auto mb-2" />
      <div className="h-6 bg-gray-700 rounded w-1/2 mx-auto" />
    </div>
  );
}

export default function GithubSection() {
  const username = "abusayeds";

  const [data, setData] = useState<GitHubData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("/api/github")
      .then((res) => {
        if (!res.ok) throw new Error("API failed");
        return res.json();
      })
      .then((json) => {
        setData(json);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  return (
    <section className="bg-[#0d1117] text-white p-6 rounded-2xl border border-gray-800 max-w-5xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">GitHub Activity</h2>

        <a
          href={`https://github.com/${username}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-gray-400 hover:text-white transition-colors"
        >
          @{username} →
        </a>
      </div>

      {/* Contribution Calendar */}
      <div className="bg-[#161b22] border border-gray-800 p-5 rounded-xl overflow-x-auto">
        <GitHubCalendar
          username={username}
          colorScheme="dark"
          fontSize={12}
          blockSize={12}
          blockMargin={3}
        />
      </div>

      {/* Stats Grid */}
      {loading ? (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {Array.from({ length: 4 }).map((_, i) => (
            <SkeletonCard key={i} />
          ))}
        </div>
      ) : error ? (
        <div className="bg-red-950 border border-red-800 rounded-xl p-4 text-center text-red-400 text-sm">
          GitHub data লোড হয়নি। API token সঠিক কিনা চেক করুন।
        </div>
      ) : (
        <>
          {/* Main Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <StatCard
              icon={<FaUsers />}
              label="Followers"
              value={data?.followers ?? 0}
              color="text-blue-400"
            />
            <StatCard
              icon={<FaUserPlus />}
              label="Following"
              value={data?.following ?? 0}
              color="text-green-400"
            />
            <StatCard
              icon={<FaBook />}
              label="Repositories"
              value={data?.repos ?? 0}
              color="text-purple-400"
            />
            <StatCard
              icon={<FaCodeBranch />}
              label="Pull Requests"
              value={data?.pullRequests ?? 0}
              color="text-pink-400"
            />
          </div>

          {/* Total Contributions */}
          <div className="bg-gradient-to-r from-orange-950 to-yellow-950 border border-orange-800 rounded-xl p-5 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <FaExclamationCircle className="text-orange-400 text-2xl" />
              <div>
                <p className="text-sm text-orange-300">
                  Total Contributions (Public + Org)
                </p>
                <p className="text-xs text-orange-500">
                  Commits + PRs + Issues
                </p>
              </div>
            </div>

            <span className="text-4xl font-black text-orange-400">
              {data?.totalContributions ?? 0}
            </span>
          </div>

          {/* Extra Stats */}
          <div className="grid grid-cols-3 gap-3">
            <div className="bg-[#161b22] border border-gray-800 rounded-xl p-3 text-center">
              <FaCode className="mx-auto mb-1 text-yellow-400" />
              <p className="text-xs text-gray-500">Commits</p>
              <p className="text-lg font-bold">{data?.commits ?? 0}</p>
            </div>

            <div className="bg-[#161b22] border border-gray-800 rounded-xl p-3 text-center">
              <FaCodeBranch className="mx-auto mb-1 text-pink-400" />
              <p className="text-xs text-gray-500">Pull Requests</p>
              <p className="text-lg font-bold">{data?.pullRequests ?? 0}</p>
            </div>

            <div className="bg-[#161b22] border border-gray-800 rounded-xl p-3 text-center">
              <FaExclamationCircle className="mx-auto mb-1 text-red-400" />
              <p className="text-xs text-gray-500">Issues</p>
              <p className="text-lg font-bold">{data?.issues ?? 0}</p>
            </div>
          </div>

          {/* Organizations */}
          {data?.organizations?.length ? (
            <div className="bg-[#161b22] border border-gray-800 rounded-xl p-4">
              <div className="flex items-center gap-2 mb-3">
                <FaBuilding className="text-gray-400" />
                <p className="text-sm text-gray-400 font-medium">
                  Organizations
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {data.organizations.map((org) => (
                  <a
                    key={org.login}
                    href={`https://github.com/${org.login}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-[#0d1117] border border-gray-700 
                               hover:border-gray-500 text-sm px-3 py-1.5 rounded-full 
                               transition-colors duration-200"
                  >
                    {org.avatarUrl && (
                      <img
                        src={org.avatarUrl}
                        alt={org.login}
                        className="w-4 h-4 rounded-full"
                      />
                    )}
                    <span className="text-gray-300">
                      {org.name || org.login}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          ) : null}
        </>
      )}

      {/* Footer */}
      <p className="text-xs text-gray-600 text-center">
        ✅ Data fetched via GitHub API (public + org contributions)
      </p>
    </section>
  );
}
