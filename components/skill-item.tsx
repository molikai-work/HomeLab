// components/skill-item.tsx

interface SkillItemProps {
  name: string;
  icon?: string;
}

export function SkillItem({ name, icon }: SkillItemProps) {
  return (
    <div className="flex items-center gap-2 p-2 sm:p-3 rounded-lg bg-white/5">
      {icon && (
        <img src={icon} alt={name} className="w-5 h-5 sm:w-6 sm:h-6" />
      )}
      <span className="text-sm sm:text-base">{name}</span>
    </div>
  );
}
