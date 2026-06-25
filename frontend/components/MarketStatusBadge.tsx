import { MarketStatus } from "@/lib/api";

export interface MarketStatusBadgeProps {
  status: MarketStatus;
}

const stylesByStatus: Record<MarketStatus, string> = {
  Open: "bg-emerald-100 px-2.5 py-0.5 text-emerald-800",
  Locked: "bg-amber-100 px-2.5 py-0.5 text-amber-800",
  Resolved: "bg-blue-100 px-2.5 py-0.5 text-blue-800",
  Cancelled: "bg-slate-100 px-2.5 py-0.5 text-slate-600",
  Disputed: "bg-rose-100 px-2.5 py-0.5 text-rose-800",
};

/**
 * Color-coded pill badge for a market's status.
 * Open=green, Locked=yellow, Resolved=blue, Disputed=red, Cancelled=gray.
 */
export function MarketStatusBadge({ status }: MarketStatusBadgeProps): JSX.Element {
  return (
    <span className={`inline-flex items-center rounded-full text-xs font-medium ${stylesByStatus[status]}`}>
      {status}
    </span>
  );
}
