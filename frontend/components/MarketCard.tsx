"use client";

import { useRouter } from "next/navigation";
import { Market } from "@/lib/api";
import { MarketStatusBadge } from "./MarketStatusBadge";

export interface MarketCardProps {
  market: Market;
  showOdds: boolean;
}

/**
 * Displays a compact preview of one boxing market.
 * Shows fighter names, scheduled date, pool sizes, and implied odds bar.
 * Clicking the card navigates to /markets/[id].
 */
export default function MarketCard({ market, showOdds }: MarketCardProps): JSX.Element {
  const router = useRouter();

  return (
    <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
      <button
        type="button"
        onClick={() => router.push(`/markets/${market.id}`)}
        aria-label={`${market.fighterA.name} vs ${market.fighterB.name}`}
        className="w-full cursor-pointer rounded-lg border border-slate-200 bg-white p-4 text-left transition hover:shadow-md"
      >
        <div className="flex items-start justify-between gap-3">
          <div>
            <div className="text-base font-semibold text-slate-900">{market.fighterA.name}</div>
            <div className="text-sm text-slate-500">vs</div>
            <div className="text-base font-semibold text-slate-900">{market.fighterB.name}</div>
          </div>
          <div className="flex flex-col items-end gap-2">
            <MarketStatusBadge status={market.status} />
            {showOdds ? (
              <div className="text-sm text-slate-500">
                {market.poolA} / {market.poolB}
              </div>
            ) : null}
          </div>
        </div>
      </button>
    </div>
  );
}
