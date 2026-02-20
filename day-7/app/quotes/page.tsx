"use client";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchQuotes } from "../redux/quotesSlice";
import { RootState, AppDispatch } from "../redux/store";

export default function QuotesPage() {
  const dispatch = useDispatch<AppDispatch>();
  const { quotes, loading } = useSelector(
    (state: RootState) => state.quotes
  );

  useEffect(() => {
    dispatch(fetchQuotes());
  }, [dispatch]);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Quotes</h1>

      {loading && <p>Loading quotes...</p>}

      {quotes.map((quote: any) => (
        <div key={quote.id} className="mb-3 border p-3">
          <p>{quote.quote}</p>
          <p className="text-sm text-gray-500">- {quote.author}</p>
        </div>
      ))}
    </div>
  );
}