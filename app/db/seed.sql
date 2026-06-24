-- db/seed.sql
-- Aesthetic Training Hub seed data

PRAGMA foreign_keys = ON;

DROP TABLE IF EXISTS practitioner_specialisms;
DROP TABLE IF EXISTS specialisms;
DROP TABLE IF EXISTS practitioners;

CREATE TABLE practitioners (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  location TEXT NOT NULL,
  latitude REAL NOT NULL,
  longitude REAL NOT NULL,
  tier TEXT NOT NULL CHECK (tier IN ('Standard', 'Premium')),
  monthly_price INTEGER NOT NULL CHECK (monthly_price > 0),
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE specialisms (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL UNIQUE
);

CREATE TABLE practitioner_specialisms (
  practitioner_id TEXT NOT NULL,
  specialism_id INTEGER NOT NULL,
  PRIMARY KEY (practitioner_id, specialism_id),
  FOREIGN KEY (practitioner_id) REFERENCES practitioners(id) ON DELETE CASCADE,
  FOREIGN KEY (specialism_id) REFERENCES specialisms(id) ON DELETE CASCADE
);

INSERT INTO practitioners (
  id,
  name,
  location,
  latitude,
  longitude,
  tier,
  monthly_price
) VALUES
('pr-001', 'Dr Amelia Hart', 'London', 51.5072, -0.1276, 'Premium', 249),
('pr-002', 'Sophie Bennett RN', 'Manchester', 53.4808, -2.2426, 'Standard', 150),
('pr-003', 'Dr Ravi Shah', 'Birmingham', 52.4862, -1.8904, 'Premium', 249),
('pr-004', 'Claire Morgan', 'Leeds', 53.8008, -1.5491, 'Standard', 150),
('pr-005', 'Emma Walsh RN', 'Liverpool', 53.4084, -2.9916, 'Premium', 249),
('pr-006', 'Dr Hannah Price', 'Bristol', 51.4545, -2.5879, 'Standard', 150),
('pr-007', 'Nadia Khan', 'Glasgow', 55.8642, -4.2518, 'Standard', 150),
('pr-008', 'Dr Oliver Reed', 'London', 51.5072, -0.1276, 'Premium', 249),
('pr-009', 'Bethany Clarke', 'Cardiff', 51.4816, -3.1791, 'Standard', 150),
('pr-010', 'Dr Marcus Ellis', 'Newcastle', 54.9783, -1.6178, 'Premium', 249),
('pr-011', 'Aisha Patel RN', 'Nottingham', 52.9548, -1.1581, 'Standard', 150),
('pr-012', 'Rachel Thompson', 'Edinburgh', 55.9533, -3.1883, 'Standard', 150);

INSERT INTO specialisms (name) VALUES
('Botulinum Toxin'),
('Dermal Fillers'),
('Facial Anatomy'),
('Skin Boosters'),
('Microneedling'),
('Chemical Peels'),
('Advanced Injectables'),
('Complications Management'),
('Laser Hair Removal'),
('IPL'),
('Skin Rejuvenation'),
('Lip Augmentation'),
('Consultation Skills'),
('Acne Treatments'),
('Medical Skincare'),
('Brow Mapping'),
('Semi-Permanent Makeup'),
('Micropigmentation'),
('Non-Surgical Rhinoplasty'),
('PRP'),
('Emergency Protocols');

INSERT INTO practitioner_specialisms (practitioner_id, specialism_id)
SELECT 'pr-001', id FROM specialisms WHERE name IN (
  'Botulinum Toxin',
  'Dermal Fillers',
  'Facial Anatomy'
);

INSERT INTO practitioner_specialisms (practitioner_id, specialism_id)
SELECT 'pr-002', id FROM specialisms WHERE name IN (
  'Skin Boosters',
  'Microneedling',
  'Chemical Peels'
);

INSERT INTO practitioner_specialisms (practitioner_id, specialism_id)
SELECT 'pr-003', id FROM specialisms WHERE name IN (
  'Advanced Injectables',
  'Complications Management',
  'Dermal Fillers'
);

INSERT INTO practitioner_specialisms (practitioner_id, specialism_id)
SELECT 'pr-004', id FROM specialisms WHERE name IN (
  'Laser Hair Removal',
  'IPL',
  'Skin Rejuvenation'
);

INSERT INTO practitioner_specialisms (practitioner_id, specialism_id)
SELECT 'pr-005', id FROM specialisms WHERE name IN (
  'Botulinum Toxin',
  'Lip Augmentation',
  'Consultation Skills'
);

INSERT INTO practitioner_specialisms (practitioner_id, specialism_id)
SELECT 'pr-006', id FROM specialisms WHERE name IN (
  'Chemical Peels',
  'Acne Treatments',
  'Medical Skincare'
);

INSERT INTO practitioner_specialisms (practitioner_id, specialism_id)
SELECT 'pr-007', id FROM specialisms WHERE name IN (
  'Brow Mapping',
  'Semi-Permanent Makeup',
  'Micropigmentation'
);

INSERT INTO practitioner_specialisms (practitioner_id, specialism_id)
SELECT 'pr-008', id FROM specialisms WHERE name IN (
  'Facial Anatomy',
  'Advanced Injectables',
  'Non-Surgical Rhinoplasty'
);

INSERT INTO practitioner_specialisms (practitioner_id, specialism_id)
SELECT 'pr-009', id FROM specialisms WHERE name IN (
  'Microneedling',
  'PRP',
  'Skin Boosters'
);

INSERT INTO practitioner_specialisms (practitioner_id, specialism_id)
SELECT 'pr-010', id FROM specialisms WHERE name IN (
  'Complications Management',
  'Emergency Protocols',
  'Dermal Fillers'
);

INSERT INTO practitioner_specialisms (practitioner_id, specialism_id)
SELECT 'pr-011', id FROM specialisms WHERE name IN (
  'Botulinum Toxin',
  'Dermal Fillers',
  'Lip Augmentation'
);

INSERT INTO practitioner_specialisms (practitioner_id, specialism_id)
SELECT 'pr-012', id FROM specialisms WHERE name IN (
  'Chemical Peels',
  'Skin Rejuvenation',
  'Medical Skincare'
);

-- Directory query:
-- SELECT
--   p.id,
--   p.name,
--   p.location,
--   p.latitude,
--   p.longitude,
--   p.tier,
--   p.monthly_price,
--   GROUP_CONCAT(s.name, ', ') AS specialisms
-- FROM practitioners p
-- JOIN practitioner_specialisms ps ON ps.practitioner_id = p.id
-- JOIN specialisms s ON s.id = ps.specialism_id
-- GROUP BY
--   p.id,
--   p.name,
--   p.location,
--   p.latitude,
--   p.longitude,
--   p.tier,
--   p.monthly_price
-- ORDER BY
--   CASE p.tier WHEN 'Premium' THEN 0 ELSE 1 END,
--   p.name ASC;

-- Filter by specialism:
-- SELECT
--   p.id,
--   p.name,
--   p.location,
--   p.latitude,
--   p.longitude,
--   p.tier,
--   p.monthly_price,
--   GROUP_CONCAT(s_all.name, ', ') AS specialisms
-- FROM practitioners p
-- JOIN practitioner_specialisms ps_filter ON ps_filter.practitioner_id = p.id
-- JOIN specialisms s_filter ON s_filter.id = ps_filter.specialism_id
-- JOIN practitioner_specialisms ps_all ON ps_all.practitioner_id = p.id
-- JOIN specialisms s_all ON s_all.id = ps_all.specialism_id
-- WHERE s_filter.name = 'Dermal Fillers'
-- GROUP BY
--   p.id,
--   p.name,
--   p.location,
--   p.latitude,
--   p.longitude,
--   p.tier,
--   p.monthly_price
-- ORDER BY
--   CASE p.tier WHEN 'Premium' THEN 0 ELSE 1 END,
--   p.name ASC;

-- Filter by location:
-- SELECT
--   p.id,
--   p.name,
--   p.location,
--   p.latitude,
--   p.longitude,
--   p.tier,
--   p.monthly_price,
--   GROUP_CONCAT(s.name, ', ') AS specialisms
-- FROM practitioners p
-- JOIN practitioner_specialisms ps ON ps.practitioner_id = p.id
-- JOIN specialisms s ON s.id = ps.specialism_id
-- WHERE p.location = 'London'
-- GROUP BY
--   p.id,
--   p.name,
--   p.location,
--   p.latitude,
--   p.longitude,
--   p.tier,
--   p.monthly_price
-- ORDER BY
--   CASE p.tier WHEN 'Premium' THEN 0 ELSE 1 END,
--   p.name ASC;

-- Filter by tier:
-- SELECT
--   p.id,
--   p.name,
--   p.location,
--   p.latitude,
--   p.longitude,
--   p.tier,
--   p.monthly_price,
--   GROUP_CONCAT(s.name, ', ') AS specialisms
-- FROM practitioners p
-- JOIN practitioner_specialisms ps ON ps.practitioner_id = p.id
-- JOIN specialisms s ON s.id = ps.specialism_id
-- WHERE p.tier = 'Premium'
-- GROUP BY
--   p.id,
--   p.name,
--   p.location,
--   p.latitude,
--   p.longitude,
--   p.tier,
--   p.monthly_price
-- ORDER BY
--   p.name ASC;