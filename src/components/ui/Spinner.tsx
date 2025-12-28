import React from 'react';

export function Spinner({ className = "size-6" }: { className?: string }) {
    return (
        <div className={`animate-spin rounded-full border-2 border-current border-t-transparent ${className}`} role="status">
            <span className="sr-only">Loading...</span>
        </div>
    );
}
