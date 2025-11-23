-- Add performance indexes for frequently queried fields

-- Donor indexes
CREATE INDEX IF NOT EXISTS "Donor_lastGiftDate_idx" ON "Donor"("lastGiftDate");
CREATE INDEX IF NOT EXISTS "Donor_totalGiven_idx" ON "Donor"("totalGiven");
CREATE INDEX IF NOT EXISTS "Donor_state_postalCode_idx" ON "Donor"("state", "postalCode");

-- Pledge indexes
CREATE INDEX IF NOT EXISTS "Pledge_date_idx" ON "Pledge"("date");
CREATE INDEX IF NOT EXISTS "Pledge_status_date_idx" ON "Pledge"("status", "date");
CREATE INDEX IF NOT EXISTS "Pledge_donorId_idx" ON "Pledge"("donorId");

-- Event indexes
CREATE INDEX IF NOT EXISTS "Event_startDate_idx" ON "Event"("startDate");
CREATE INDEX IF NOT EXISTS "Event_status_startDate_idx" ON "Event"("status", "startDate");

-- EventAttendance indexes
CREATE INDEX IF NOT EXISTS "EventAttendance_eventId_idx" ON "EventAttendance"("eventId");
CREATE INDEX IF NOT EXISTS "EventAttendance_donorId_idx" ON "EventAttendance"("donorId");

