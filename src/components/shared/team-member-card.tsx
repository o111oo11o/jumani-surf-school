import Image from "next/image";
import type { TeamMember } from "@/types";

type TeamMemberCardProps = {
  member: TeamMember;
};

export function TeamMemberCard({ member }: TeamMemberCardProps) {
  return (
    <div className="text-center">
      <div className="relative w-40 h-40 mx-auto mb-4 rounded-full overflow-hidden">
        <Image
          src={member.image}
          alt={member.imageAlt}
          fill
          className="object-cover"
          sizes="160px"
          loading="lazy"
        />
      </div>
      <h3 className="font-display text-xl font-bold text-dark mb-1">
        {member.name}
      </h3>
      <p className="text-sm font-semibold text-teal-deep mb-1">
        {member.role}
      </p>
      {member.certifications && (
        <p className="text-xs text-text-muted mb-3">
          {member.certifications}
        </p>
      )}
      <p className="text-sm text-text-muted leading-relaxed max-w-md mx-auto">
        {member.bio}
      </p>
    </div>
  );
}
