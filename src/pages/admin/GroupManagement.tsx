import { GroupCards, type Group } from "@/components/GroupCards";

// Dados de exemplo para demonstração
const sampleGroups: Group[] = [
  {
    id: "1",
    name: "Product Development Team",
    membersCount: 12,
    description: "Team focused on product development and innovation",
    createdAt: "2024-01-15",
  },
  {
    id: "2",
    name: "Marketing Squad",
    membersCount: 8,
    description: "Marketing strategies and campaign management",
    createdAt: "2024-01-10",
  },
  {
    id: "3",
    name: "Customer Support",
    membersCount: 15,
    description: "Customer service and support operations",
    createdAt: "2024-01-05",
  },
  {
    id: "4",
    name: "Design Team",
    membersCount: 6,
    description: "UI/UX design and creative solutions",
    createdAt: "2024-01-20",
  },
  {
    id: "5",
    name: "Engineering",
    membersCount: 20,
    description: "Software engineering and technical development",
    createdAt: "2024-01-01",
  },
  {
    id: "6",
    name: "Quality Assurance",
    membersCount: 4,
    description: "Testing and quality control processes",
    createdAt: "2024-01-12",
  },
];

export default function GroupManagement() {
  return (
    <div className="w-screen h-screen bg-gray-50 pt-2">
      <div className="flex flex-col justify-center items-center mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Groups Overview
          </h1>
          <p className="text-gray-600">Browse through your available groups</p>
        </div>

        <GroupCards groups={sampleGroups} />
      </div>
    </div>
  );
}
