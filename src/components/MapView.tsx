"use client";

import { useEffect, useMemo } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
} from "react-leaflet";
import L from "leaflet";
import Link from "next/link";
import type { Organization } from "@/data/organizations";

const markerIcon = L.divIcon({
  className: "kapuluan-marker",
  html: '<span class="kapuluan-marker-dot"></span>',
  iconSize: [14, 14],
  iconAnchor: [7, 7],
});

function FitBounds({ orgs }: { orgs: Organization[] }) {
  const map = useMap();
  useEffect(() => {
    if (orgs.length === 0) return;
    const bounds = L.latLngBounds(orgs.map((o) => [o.lat, o.lng] as [number, number]));
    map.fitBounds(bounds, { padding: [40, 40], maxZoom: 7 });
  }, [map, orgs]);
  return null;
}

function blurbPreview(text: string, max = 140) {
  if (text.length <= max) return text;
  return text.slice(0, max).trimEnd() + "...";
}

export default function MapView({
  organizations,
}: {
  organizations: Organization[];
}) {
  const center = useMemo<[number, number]>(() => [11.5, 122.5], []);

  return (
    <div className="h-[min(70vh,560px)] w-full overflow-hidden rounded-2xl border border-ring/50 shadow-sm sm:h-[min(75vh,640px)]">
      <MapContainer
        center={center}
        zoom={6}
        scrollWheelZoom
        className="h-full w-full"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <FitBounds orgs={organizations} />
        {organizations.map((org) => (
          <Marker
            key={org.id}
            position={[org.lat, org.lng]}
            icon={markerIcon}
          >
            <Popup>
              <div className="space-y-1">
                <strong className="block text-sm text-deep-green">
                  {org.name}
                </strong>
                <span className="block text-xs text-muted">{org.place}</span>
                <p className="text-xs leading-snug text-ink">
                  {blurbPreview(org.blurb)}
                </p>
                <Link
                  href={`/org/${org.id}`}
                  className="inline-block pt-1 text-xs font-semibold text-deep-green underline"
                >
                  Open detail
                </Link>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
