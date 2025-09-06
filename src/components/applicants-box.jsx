"use client"
import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import { selectCandidate } from '@/app/actions/e/selectCandidate'
import { useRouter } from 'next/navigation'
import { CircleArrowRight } from 'lucide-react'

const ApplicantsBox = ({ ap, jobId }) => {
  const router = useRouter()

  async function handleSelectCandidate({ userId, jobId, type }) {
    try {
      await selectCandidate({ userId, jobId, type });
    } catch (error) {
      console.log(error)
    } finally {
      router.refresh()
    }
  }

  return (
    <div
      key={ap.id}
      className="bg-white dark:bg-gray-900 shadow-md rounded-xl p-4 space-y-3 border border-gray-200 dark:border-gray-700 transition hover:shadow-lg"
    >
      {/* Header */}
      <div className="flex items-center gap-3">
        <Image
          src={ap.image}
          width={50}
          height={50}
          alt={ap.name}
          className="rounded-full border"
        />
        <div>
          <p className="text-lg font-bold text-gray-900 dark:text-gray-100">{ap.name}</p>
          <p className="text-sm text-gray-600 dark:text-gray-400">{ap.email}</p>
        </div>
      </div>

      {/* Info */}
      <div className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
        <p><span className="font-medium">Based in:</span> {ap.location}</p>
        <p><span className="font-medium">Salary Expected:</span> {ap.salary}</p>
        <p className="flex items-center gap-2">
          <span className="font-medium">Resume:</span>
          <a
            href={ap.resume}
            target="_blank"
            className="flex items-center gap-1 text-indigo-600 hover:underline"
          >
            View <CircleArrowRight size={16} />
          </a>
        </p>
      </div>

      {/* Skills */}
      <div>
        <p className="font-medium text-gray-800 dark:text-gray-200 mb-1">Skills:</p>
        <div className="flex flex-wrap gap-2">
          {ap.skills?.map((skill, i) => (
            <span
              key={i}
              className="px-3 py-1 text-xs font-medium rounded-full bg-indigo-100 text-indigo-700 dark:bg-indigo-700 dark:text-indigo-100"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      <hr className="border-gray-200 dark:border-gray-700" />

      {/* Experience */}
      <div>
        <p className="font-medium text-gray-800 dark:text-gray-200 mb-2">Work Experience:</p>
        <div className="space-y-2">
          {ap.experiences.map((exp, i) => (
            <div
              key={i}
              className="bg-gray-50 dark:bg-gray-800 p-3 rounded-md border border-gray-200 dark:border-gray-700"
            >
              <h5 className="font-semibold text-sm">Worked at: {exp.companyName}</h5>
              <h6 className="text-xs text-gray-600 dark:text-gray-400">Role: {exp.role}</h6>
              <p className="text-xs">
                {new Date(exp.startDate).toLocaleDateString('en-In', { day: 'numeric', month: 'short', year: 'numeric' })} 
                {" "} - {" "} 
                {new Date(exp.endDate).toLocaleDateString('en-In', { day: 'numeric', month: 'short', year: 'numeric' })}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center justify-between pt-3">
        <span className="text-sm text-gray-600 dark:text-gray-400">Status: 
          <span className="ml-1 font-semibold">{ap.status}</span>
        </span>
        <div className="space-x-2">
          {ap.status !== 'SHORTLISTED' && (
            <Button
              size="sm"
              className="bg-amber-500 hover:bg-amber-600 text-white"
              onClick={() => handleSelectCandidate({ userId: ap.id, jobId, type: "SHORTLISTED" })}
            >
              Shortlist
            </Button>
          )}
          {ap.status !== 'SELECTED' && (
            <Button
              size="sm"
              className="bg-green-600 hover:bg-green-700 text-white"
              onClick={() => handleSelectCandidate({ userId: ap.id, jobId, type: "SELECTED" })}
            >
              Select
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}

export default ApplicantsBox
