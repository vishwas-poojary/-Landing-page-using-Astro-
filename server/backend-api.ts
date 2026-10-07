export interface BackendApiOptions {
  endpoint: string;
  method?: "GET" | "POST";
  body?: unknown;
}

export async function fetchBackendApi<T = unknown>(options: BackendApiOptions): Promise<T | null> {
  const baseUrl = process.env.PUBLIC_API_URL || "";
  if (!baseUrl) return null;

  try {
    const res = await fetch(`${baseUrl}/${options.endpoint}`, {
      method: options.method || "GET",
      headers: { "Content-Type": "application/json" },
      body: options.body ? JSON.stringify(options.body) : undefined,
    });
    if (!res.ok) return null;
    return (await res.json()) as T;
  } catch (error) {
    console.error("fetchBackendApi error:", error);
    return null;
  }
}
