type TrialBudgetProps = {
  children: React.ReactNode;
};

export const TrailBudget = ({ children }: TrialBudgetProps) => {
  return (
    <li className="flex text-slate-600 bg-slate-200  text-base font-regular px-3 py-1 rounded">{children}</li>
  );
};
