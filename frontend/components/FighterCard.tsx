import { Fighter } from "@/lib/api";

export interface FighterCardProps {
  fighter: Fighter;
  side: "A" | "B";
  poolAmount: bigint;
  impliedOdds: number; // 0–100 percentage
}

/**
 * Displays one fighter's info: name, record, weight class, nationality.
 * Shows current pool size in XLM and implied win probability as a percentage.
 */
export function FighterCard({ fighter, side, poolAmount, impliedOdds }: FighterCardProps): JSX.Element {
  const formattedPool = poolAmount === 0n ? "0" : poolAmount.toString();

  return (
    <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="text-base font-semibold text-slate-900">{fighter.name}</div>
          <div className="mt-1 text-sm text-slate-500">{fighter.record}</div>
          <div className="text-sm text-slate-500">{fighter.nationality}</div>
          <div className="text-sm text-slate-500">{fighter.weightClass}</div>
        </div>
        <div className="text-right">
          <div className="text-sm font-medium text-slate-700">{`Side ${side}`}</div>
          <div className="mt-1 text-sm text-slate-500">{`Pool: ${formattedPool} XLM`}</div>
          <div className="text-sm font-semibold text-slate-900">{`${impliedOdds.toFixed(1)}%`}</div>
        </div>
      </div>
    </div>
  );
}
